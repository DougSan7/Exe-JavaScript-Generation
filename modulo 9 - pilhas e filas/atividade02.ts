import { Stack } from "./Stack";
import readlinesync = require('readline-sync');

const livros = new Stack<String>();
let opcao;
let livro;
let continua;

do{ 
  console.log("*******************************************");
  console.log("      1 - Adicionar livros a pilha");
  console.log("      2 - Listar todos os livros");
  console.log("      3 - Retirar livro da pilha");
  console.log("      0 - Sair");
  console.log("*******************************************");

  opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
  
  if(opcao === 1){
    livro = readlinesync.question("Digite o nome: ");
  }
  console.log("\n*******************************************");
    
  switch(opcao){
    case 1:
      console.log("Pilha:\n");

      livros.push(`${livro}`);
      livros.printStack();    

      console.log("\nLivro Adicionado!");
      continua = true;      
    break;

    case 2:
      console.log("Lista de Livros na Pilha: \n");
      if(livros.isEmpty() === false){
        livros.printStack();
      }else{ 
        console.log("A Pilha está vazia!");
      }
      continua = true; 
    break;

    case 3:
      console.log("Pilha:\n");

      livros.pop();
            
      if(livros.isEmpty()){
        console.log("A pilha está vazia!");
      }else{
        livros.printStack();
        console.log(`\nO livro foi retirado da pilha!`);
      }
      continua = true; 
    break;

    case 0:
      continua = false;
      console.log("Programa Finalizado!")
    break;
  }
}while(continua == true);
