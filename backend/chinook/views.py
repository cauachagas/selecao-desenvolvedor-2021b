from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response
from chinook.serializers import AlbumSerializer, GenreSerializer, PlaylistSerializer, TrackSimplifiedSerializer
from chinook.models import Album, Genre, Playlist, Track
from core.utils import sql_fetch_all


class AlbumListAPIView(ListAPIView):
    queryset = Album.objects.select_related('artist').all()
    serializer_class = AlbumSerializer


class GenreListAPIView(ListAPIView):
    queryset = Genre.objects.all()
    # queryset = Genre.objects.prefetch_related('tracks').all()
    serializer_class = GenreSerializer


class PlaylistListAPIView(ListAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer


class TrackListAPIView(ListAPIView):
    # queryset = Track.objects.all().only('id', 'name', 'composer')  # Selected only the fields that will be used.
    queryset = Track.objects.select_related('album', 'genre').all()
    serializer_class = TrackSimplifiedSerializer


class ReportDataAPIView(GenericAPIView):
    def get_queryset(self): 
        return sql_fetch_all(
            """
                SELECT *,
                    customers.[FirstName] || ' ' || customers.[LastName] as FullName
                FROM customers
                LEFT JOIN employees ON employees.[EmployeeId] = customers.[SupportRepId]
                ORDER BY CustomerId
            """
        )
    
    def get(self, request, *args, **kwargs):
        return Response(self.get_queryset())