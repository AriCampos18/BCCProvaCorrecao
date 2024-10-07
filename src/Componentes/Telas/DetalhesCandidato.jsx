import { Button, Container} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useState } from "react";

export default function DetalhesCandidato(props) {

    const [questao,setQuestao]=useState("");

    function inserirDuvida(){
        props.candidatoSelecionado.questionamentos.push(questao);
        setQuestao
    }

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <img src={props.candidatoSelecionado.avatar}> </img>
            <p> "email": {props.candidatoSelecionado.email} </p>
            <p>Eu sou: {props.candidatoSelecionado.nome}</p>
            <p>Essas são minhas propostas </p>
            <ul>
                {props.candidatoSelecionado.propostas.map((proposta)=>{
                    return <li>{proposta}</li>
                })}
            </ul>
            <h2>Dúvidas?</h2>
            <label>Insira sua duvida aqui:</label>
            <input type="text" id="duvida" value={questao} onChange={()=>{
                setQuestao(evento.currentTarget.value);
            }}></input>
            <Button onClick={()=>{
                inserirDuvida();
            }}>Adicionar</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Dúvidas ds eleitores</th>
                    </tr>
                </thead>
                <tbody>
                    {props.candidatoSelecionado.questionamentos.map((questao)=>{
                        return <tr><td>{questao}</td></tr>
                    })}
                </tbody>
            </Table>
            <Button onClick={()=>{
                props.setDetalharCandidato(false);
            }}>Voltar</Button>
        </Container>
    );
}