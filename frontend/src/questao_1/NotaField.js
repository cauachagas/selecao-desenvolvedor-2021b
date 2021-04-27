
function NotaField({maxNota, value, onChange}) {
  
  const corInativa='gray';
  const corAtivado='red';
  const estrelinhas = Array.from({length: maxNota}, () => '🟊')

  const onChangeValue = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {estrelinhas.map((s, index) => {
        let cor = corInativa;
        if (index < value) {
          cor=corAtivado;
        }
        return (
          <span className={"star"}
            style={{cursor: 'pointer', color: cor}}
            key={index}
            onClick={()=>onChangeValue(index)}>{s}
          </span>
        )
      })}
      {value}
    </div>
  )
}
  
export default NotaField;
