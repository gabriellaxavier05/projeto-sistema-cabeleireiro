# Banco de Dados My Nail Salon

<br>

## Tabelas a serem criadas e suas colunas
- Perfil:
    - codPerfil PK not null
    - tipoPerfil varchar(20) not null default 'Funcionário'

- Profissional:
    - codProfissional PK not null 
    - codPerfil FK not null
    - nome varchar(150) not null 
    - CPF char(20) not null
    - genero enum
    - dataNascimento date not null
    - celular varchar(15) not null
    - email varchar(30) not null
    - dataContratacao date not null
    - senhaLogin varchar(10) not null

- Procedimento:
    - codProcedimento PK not null
    - nomeProcedimento varchar(150) not null
    - valorProcedimento money not null

- Cliente:
    - codCliente PK not null
    - nome varchar(150) not null
    - celular varchar(15) not null
    - genero enum

- Agendamento:
    - codAgendamento PK not null
    - codCliente FK not null 
    - codProcedimento FK not null
    - codProfissional FK not null
    - dataAgendamento date not null
    - horarioAgendamento time not null
    - codTipoPagamento FK not null

- TipoPagamento:
    - codTipoPagamento PK not null
    - tipoPagamento varchar(25) not null