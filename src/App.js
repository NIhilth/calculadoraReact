import './App.css';
import React, { useState } from 'react';

function Botao(props) {
  return (
    <button className='botao' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function Linha(props) {
  return (
    <div className='linha'>
      {props.children}
    </div>
  )
}

function calcular(valor){

}

function Calculadora() {
  const [valor, setValor] = useState(0)
  const [resultado, setResultado] = useState()

  const handleAdd = (e) => {
    if(valor == 0){
      setValor(e.target.innerText)
    } else {
      setValor( valor + e.target.innerText)
    }
  }

  const handleChange = (e) => {
    const action = e.target.innerText
    if(action == "AC"){
      setValor(0)
    } else if (action == "="){
      setValor(calcular(valor))
    } else if(action == "ANS"){
      setValor(resultado)
    } else if(action == "+/-"){
      //fazer trocar o sinal
    }
  }

  return (
    <div className="calculadora">
      <div id='visor'>
        {valor}
      </div>
      <Linha>
        <Botao value="AC" onClick={handleChange}></Botao>
        <Botao value="+/-" onClick={handleChange}></Botao>
        <Botao value="%" onClick={handleAdd}></Botao>
        <Botao value="/" onClick={handleAdd}></Botao>
      </Linha>
      <Linha>
        <Botao value="7" onClick={handleAdd}></Botao>
        <Botao value="8" onClick={handleAdd}></Botao>
        <Botao value="9" onClick={handleAdd}></Botao>
        <Botao value="*" onClick={handleAdd}></Botao>
      </Linha>
      <Linha>
        <Botao value="4" onClick={handleAdd}></Botao>
        <Botao value="5" onClick={handleAdd}></Botao>
        <Botao value="6" onClick={handleAdd}></Botao>
        <Botao value="-" onClick={handleAdd}></Botao>
      </Linha>
      <Linha>
        <Botao value="1" onClick={handleAdd}></Botao>
        <Botao value="2" onClick={handleAdd}></Botao>
        <Botao value="3" onClick={handleAdd}></Botao>
        <Botao value="+" onClick={handleAdd}></Botao>
      </Linha>
      <Linha>
        <Botao value="0" onClick={handleAdd}></Botao>
        <Botao value="," onClick={handleAdd}></Botao>
        <Botao value="ANS" onClick={handleChange}></Botao>
        <Botao value="=" onClick={handleChange}></Botao>
      </Linha>
    </div>
  )
}

function App() {
  return (
    <Calculadora></Calculadora>
  );
}

export default App;
