create database swiftspace;
use swiftspace;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(100),
email varchar(100) unique,
senha varchar(45),
fkAlbum int,
foreign key (fkAlbum) references album(idAlbum)
);

create table album (
idAlbum int primary key auto_increment,
titulo varchar(60),
genero varchar(45),
dtLancamento date
);

create table quiz (
idQuiz int primary key auto_increment,
titulo varchar(45),
descricao varchar(60),
qtdPerguntas int
);

create table tentativa (
idTentativa int auto_increment,
fkUsuario int,
fkQuiz int,
pontuacao int,
dtHora datetime,
primary key (idTentativa, fkUsuario, fkQuiz),
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkQuiz) references quiz(idQuiz)
);

insert into album values
	(1, 'Taylor Swift', 'Country', '2006-10-24'),
    (2, "Fearless (Taylor's Version)", 'Country', '2021-04-09'),
    (3, "Speak Now (Taylor's Version)", 'Country, Pop, Pop Rock', '2023-07-07'),
    (4, "Red (Taylor's Version)", 'Pop, Country', '2021-11-12'),
    (5, "1989 (Taylor's Version)", 'Pop', '2023-10-27'),
    (6, 'reputation', 'Electropop', '2017-11-10'),
    (7, 'Lover', 'Pop', '2023-08-23'),
    (8, 'folklore', 'Alternativo, Indie Folk', '2020-07-24'),
    (9, 'evermore', 'Alternativo, Indie Folk', '2020-12-11'),
    (10, 'Midnights', 'Pop', '2022-10-21'),
    (11, 'THE TORTURED POETS DEPARTMENT', 'Synthpop', '2024-04-19');
    
insert into quiz values
	(1, 'A Vida de Taylor Swift', 'Perguntas relacionadas à vida pessoal de Taylor', 10),
    (2, 'As Músicas de Taylor Swift', 'Perguntas sobre as músicas, álbuns e prêmios de Taylor', 10),
    (3, 'As Letras de Taylor Swift', 'Complete as letras ou adivinhe de qual música elas são', 10);

select * from album;
select * from quiz;
select * from tentativa order by fkUsuario;
select * from usuario;