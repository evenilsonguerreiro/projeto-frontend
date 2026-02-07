import styled from "styled-components";
import { Cores } from "../../Cores"


export const ContainerGeral = styled.div`
    width: 100%;
    background-color: ${Cores.lightGray3};
       
`
export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 60px 20px;

    .conteudo-principal {
        display: flex;
        gap: 40px;
    }
    
    .trilha {
        p {
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
            padding-top: 20px;
            padding-bottom: 30px;
            color: ${Cores.lightGray};
           
        }
    }

    .galeria {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

         img {
            width: 70%;
         }

         .sDireita {
            width: 30px;
            height: 11px;
            z-index: 1;
            position: absolute;
            top: 300px;
            left: 50px;
            cursor: pointer;
         }

          .sEsquerda {
            width: 30px;
            height: 11px;
            z-index: 1;
            position: absolute;
            top: 300px;
            right: 50px;
            cursor: pointer;
         }
       
       
    }
    .foto-principal {
        width: 700px;
        height: 571px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E2E3FF;
         

    }

    .miniaturas {
        width: 700px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-top: 10px;
       
        img {
          width: 83px;
          height: 41px;
        }
       
       
    }

    .img-m1 {
        background-color: #E2E3FF;
        padding: 15px;
        border-radius: 4px;
        width:117.81px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
    }  
    .img-m2 {
        background-color:#ffe8bc;
        padding: 15px;
        border-radius: 4px;
        width:117.81px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
    }  
    .img-m3 {
        background-color: #ffc0bc;
        padding: 15px;
        border-radius: 4px;
        width:117.81px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
    }  
    .img-m4 {
        background-color: #dec699;
        padding: 15px;
        border-radius: 4px;
        width:117.81px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-m5 {
        background-color: #e8dfcf;
        padding: 15px;
        border-radius: 4px;
        width:117.81px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
    } 
    
    .infos {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      width: 440px;
      height: 72px;
      font-size: 32px;
      font-weight: 800;
      color: ${Cores.darkGray};
      line-height:36px;
      margin-bottom: 45px;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      color: ${Cores.lightGray};
      letter-spacing: 0.5px;
    }

    .avaliacao {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 10px;

      .stars {
        display: flex;
        gap: 2px;
        img {
          width: 14px;
        }
      }

      span {
        background-color: ${Cores.warning};
        color: ${Cores.white};
        padding: 2px 10px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;

        img {
          width: 12px;
        }
      }
    }

    .preco {
      margin-top: 20px;
      display: flex;
      align-items: baseline;
      gap: 10px;

      small {
        font-size: 16px;
        color: ${Cores.darkGray};
      }

      .preco-atual {
        font-size: 32px;
        font-weight: 800;
        color: ${Cores.darkGray2};
      }

      .preco-antigo {
        font-size: 16px;
        text-decoration: line-through;
        color: ${Cores.lightGray2};
      }
    }

    .descricao {
      h4 {
        color: ${Cores.lightGray};
        font-size: 14px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
        color: ${Cores.darkGray2};
        letter-spacing: 0.25px;
      }
    }

    .selecao-tamanho {
      h4 {
        color: ${Cores.lightGray};
        font-size: 14px;
        margin-bottom: 10px;
      }

      div {
        display: flex;
        gap: 10px;

        .tam-btn {
          width: 48px;
          height: 48px;
          border: 1px solid ${Cores.lightGray2};
          background: transparent;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          color: ${Cores.darkGray2};
          transition: 0.3s;

          &:focus {
            background-color: ${Cores.primary};
            color: white;
          }
        }
      }
    }

    .selecao-cor {
        
      h4 {
        color: ${Cores.lightGray};
        font-size: 14px;
        margin-bottom: 10px;
      }
      
     
    }

    .corPont {
       display: flex;
       gap: 10px;
       margin-bottom: 20px;
       
       .cor1 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
         background-color: #6feefe;
       }
       .cor2 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background-color: #ff6969;
       }
       .cor3 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background-color: #5e5e5e;
       }
       .cor4 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background-color: #cd70b7;
       
       }
    }

    .botao-comprar, button {
        width: 220px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        letter-spacing: 0.75px;
     
    }

    
  }

  .relacionados {
        max-width: 1200px;
        width: 100%;
        margin: auto;
        margin-top: 70px;

        a {
            color: ${Cores.primary};
        }
        h3 {
            font-size: 24px;
            font-weight: bold;
            line-height:38px;
            color: ${Cores.darkGray2};
        }

        

        .relacionados-h {
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 50px;
        }

        
    } 
    
    .grid-relacionados {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-bottom: 100px;

    
    .image-container {
       
        background-color: ${Cores.white};
        border-radius: 4px;
        padding: 50px 20px;
        position: relative;
        display: flex;
        justify-content: center;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
       

        .tag-desconto {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: #E7FF86;
            padding: 5px 12px;
            border-radius: 15px;
            font-weight: bold;
            font-size: 12px;
        }

        img {
             
            width: 100%;
            height: auto; }
    }

    .categoria {
         font-size: 15px;
          color: ${Cores.lightGray};
           margin-top: 15px;
            font-weight: bold;
         }
    .nome {
        font-size: 24px;
        width: 283px;
        height: 38px;
        line-height: 38px;
        color: ${Cores.darkGray2};
        margin: 5px 0;
        font-weight: 400;
       
       }
    
    .precos {
        .preco-antigo { 
            text-decoration: line-through;
            color: ${Cores.lightGray};
            margin-right: 10px; }
        .preco-novo {
            font-weight: bold;
            color: ${Cores.darkGray};
            font-size: 24px; }
    }
}

 @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    padding: 60px 20px;

    .conteudo-principal {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    
    .trilha {
        p {
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
            padding-top: 20px;
            padding-bottom: 30px;
            color: ${Cores.lightGray};
           
        }
    }

    .galeria {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        

         img {
            width: 60%;
         }

         .sDireita {
            width: 30px;
            height: 11px;
            z-index: 1;
            position: absolute;
            top: 35%;
            left: 30px;
            cursor: pointer;
           
         }

          .sEsquerda {
            width: 30px;
            height: 11px;
            z-index: 1;
            position: absolute;
            top: 35%;
            cursor: pointer;
         }
       
       
    }
    .foto-principal {
        width: 100%;
        height: 272px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E2E3FF;
    }

    .miniaturas {
        width: 335px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px; 
    }

    .img-m1 {
        background-color: #E2E3FF;
        padding: 15px;
        border-radius: 4px;
        width: 60.17px;
        height: 57.51px;
        display: flex;
        justify-content: center;
        align-items: center;

         img{
          width: 42px;
          height: 24px;
        }
         
    }  
    .img-m2 {
        background-color: #ffe8bc;
        padding: 15px;
        border-radius: 4px;
        width: 60.17px;
        height: 57.51px;
        display: flex;
        justify-content: center;
        align-items: center;

         img{
          width: 42px;
          height: 24px;
        }
    }  
    .img-m3 {
        background-color: #ffc0bc;
        padding: 15px;
        border-radius: 4px;
        width: 60.17px;
        height: 57.51px;
        display: flex;
        justify-content: center;
        align-items: center;

         img{
          width: 42px;
          height: 24px;
        }
    }  
    .img-m4 {
        background-color: #dec699;
        padding: 15px;
        border-radius: 4px;
        width: 60.17px;
        height: 57.51px;
        display: flex;
        justify-content: center;
        align-items: center;

         img{
          width: 42px;
          height: 24px;
        }
    }
    .img-m5 {
        background-color: #e8dfcf;
        padding: 15px;
        border-radius: 4px;
        width: 60.17px;
        height: 57.51px;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
          width: 42px;
          height: 24px;
        }
    } 
    
    .infos {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      
      font-size: 24px;
      font-weight: 800;
      color: ${Cores.darkGray};
      line-height:32px;
      letter-spacing: 1px;
      margin-bottom: 45px;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      color: ${Cores.lightGray};
      letter-spacing: 0.5px;
    }

    .avaliacao {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 10px;

      .stars {
        display: flex;
        gap: 2px;
        
        img {
          width: 14px;
        }
      }

      span {
        background-color: ${Cores.warning};
        color: ${Cores.white};
        padding: 2px 10px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;

        img {
          width: 12px;
        }
      }
    }

    .preco {
      margin-top: 20px;
      display: flex;
      align-items: baseline;
      gap: 10px;

      
      small {
        font-size: 16px;
        color: ${Cores.darkGray};
      }

      .preco-atual {
        font-size: 32px;
        font-weight: 800;
        color: ${Cores.darkGray2};
      }

      .preco-antigo {
        font-size: 16px;
        text-decoration: line-through;
        color: ${Cores.lightGray2};
      }
    }

    .descricao {
      h4 {
        color: ${Cores.lightGray};
        font-size: 14px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
        color: ${Cores.darkGray2};
        letter-spacing: 0.25px;
      }
    }

    .selecao-tamanho {
      h4 {
        color: ${Cores.lightGray};
        font-size: 14px;
        margin-bottom: 10px;
      }

      div {
        display: flex;
        gap: 10px;

        .tam-btn {
          width: 48px;
          height: 48px;
          border: 1px solid ${Cores.lightGray2};
          background: transparent;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          color: ${Cores.darkGray2};
          transition: 0.3s;

          &:focus {
            background-color: ${Cores.primary};
            color: white;
          }
        }
      }
    }

    .selecao-cor {
        
      h4 {
        color: ${Cores.lightGray};
        font-size: 14px;
        margin-bottom: 10px;
      }
      
     
    }

    .corPont {
       display: flex;
       gap: 10px;
       margin-bottom: 20px;
       
       .cor1 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
         background-color: #6feefe;
       }
       .cor2 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background-color: #ff6969;
       }
       .cor3 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background-color: #5e5e5e;
       }
       .cor4 {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background-color: #cd70b7;
       
       }
    }

    .botao-comprar, button {
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        letter-spacing: 0.75px;
     
    }

    
  }

  .relacionados {
        max-width: 1200px;
        width: 100%;
        margin: auto;
        margin-top: 30px;

        a {
            color: ${Cores.primary};
            font-size: 14px;
        }
        h3 {
            font-size: 16px;
            font-weight: bold;
            line-height:24px;
            color: ${Cores.darkGray2};
        }

        

        .relacionados-h {
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
           
        }

        
    } 
    
    .grid-relacionados {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
       
       
       

    
    .image-container {
       
        background-color: ${Cores.white};
        border-radius: 4px;
        padding: 50px 20px;
        position: relative;
        display: flex;
        justify-content: center;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
       

        .tag-desconto {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: #E7FF86;
            padding: 5px 12px;
            border-radius: 15px;
            font-weight: bold;
            font-size: 12px;
        }

        img {
             
            width: 100%;
            height: auto; }
    }

    .categoria {
         font-size: 15px;
          color: ${Cores.lightGray};
           margin-top: 15px;
            font-weight: bold;
         }
    .nome {
        font-size: 24px;
        line-height: 38px;
        color: ${Cores.darkGray2};
        margin: 5px 0;
        font-weight: 400;
        
       }
    
    .precos {
        .preco-antigo { 
            text-decoration: line-through;
            color: ${Cores.lightGray};
            margin-right: 10px; }
        .preco-novo {
            font-weight: bold;
            color: ${Cores.darkGray};
            font-size: 24px; }
    }
}
      
}



@media (max-width: 768px) {
  .grid-relacionados {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
       

    
    .image-container {
        width: 163px;
        height:179.19px;
        background-color: ${Cores.white};
        border-radius: 4px;
        padding: 30px 10px;
        position: relative;
        display: flex;
        justify-content: center;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

       
       

        .tag-desconto {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: #E7FF86;
            padding: 5px 12px;
            border-radius: 15px;
            font-weight: bold;
            font-size: 12px;
        }

        img {
             
            width: 100%;
            height: auto; }
    }

    .categoria {
        font-size: 12px;
        color: ${Cores.lightGray};
        font-weight: bold;
        line-height: 24px;
         }
    .nome {
        font-size: 12px;
        width: 149px;
        height: 22px;
        color: ${Cores.darkGray2};
        margin: 5px 0;
        font-weight: 400;
        line-height: 22px;
       }
    
    .precos {
        .preco-antigo { 
            text-decoration: line-through;
            color: ${Cores.lightGray};
            margin-right: 10px; }
        .preco-novo {
            font-weight: bold;
            color: ${Cores.darkGray};
            font-size: 16px; }
    }
}
    
}
`
