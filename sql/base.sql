CREATE DATABASE the;
USE the;

CREATE TABLE admin (
    id_admin INT PRIMARY KEY NOT NULL,
    nom_admin VARCHAR(30),
    mdp_admin VARCHAR(50)
);

CREATE TABLE variete_the (
    id_variete_the INT PRIMARY KEY NOT NULL,
    nom_variete_the VARCHAR(60),
    occupation DOUBLE ,
    rendement_pied NUMERIC(10,2)
);

CREATE TABLE parcelle (
    id_parcelle INT PRIMARY KEY NOT NULL,
    numero_parcelle INT NOT NULL,
    surface INT,
    id_variete_the INT NOT NULL,
    FOREIGN KEY (id_variete_the) REFERENCES variete_the(id_variete_the)
) ENGINE=InnoDB;

CREATE TABLE cueilleur (
    id_cueilleur INT PRIMARY KEY NOT NULL,
    nom_cueilleur VARCHAR(50) NOT NULL,
    id_genre INT ,
    date_naissance_cueilleur DATE NOT NULL
);

CREATE TABLE genre (  
    id_genre INT PRIMARY KEY NOT NULL,
    nom_genre VARCHAR(20)
);  

CREATE TABLE categorie_depense (
    id_categorie_depense INT PRIMARY KEY NOT NULL,
    nom_depense VARCHAR(30)
);

CREATE TABLE utilisateur (
    id_utilisateur INT PRIMARY KEY NOT NULL,
    mdp_utilisateur VARCHAR(50)
);

CREATE TABLE cueillette (
    id_cueillette INT PRIMARY KEY NOT NULL,
    date_cueillette DATE,
    id_cueilleur INT NOT NULL , 
    id_parcelle INT NOT NULL,
    poid_cueilli NUMERIC(10,2),
    FOREIGN KEY (id_parcelle) REFERENCES parcelle(id_parcelle) , 
    FOREIGN KEY (id_cueilleur) REFERENCES cueilleur(id_cueilleur)
) ENGINE=InnoDB;

CREATE TABLE depense (
    id_depense INT PRIMARY KEY NOT NULL,
    date_depense DATE,
    id_categorie_depense INT NOT NULL,
    montant_depense DOUBLE ,
    poids_cueilli NUMERIC(10,2),
    FOREIGN KEY (id_categorie_depense) REFERENCES categorie_depense(id_categorie_depense)
) ENGINE=InnoDB;

CREATE TABLE salaire (
    id_salaire int not null PRIMARY KEY ,
    id_cueilleur int not null ,
    montant numeric(10,2) , 
    date_salaire date , 
    FOREIGN key (id_cueilleur) REFERENCES cueilleur(id_cueilleur) 
)ENGINE=InnoDB;


-- Corrected Global View
CREATE VIEW v_global AS
    SELECT
        parcelle.id_parcelle,
        SUM(cueillette.poid_cueilli) AS poids_total_cueilli,
        parcelle.surface * variete_the.occupation - COALESCE(SUM(cueillette.poid_cueilli),  0) AS poids_restant,
        CASE WHEN COALESCE(SUM(cueillette.poid_cueilli),  0) =  0 THEN  0 ELSE depense.montant_depense / SUM(cueillette.poid_cueilli) END AS cout_revient_kg
    FROM
        cueillette
    JOIN
        parcelle ON cueillette.id_parcelle = parcelle.id_parcelle
    JOIN
        variete_the ON parcelle.id_variete_the = variete_the.id_variete_the
    JOIN
        depense ON depense.date_depense BETWEEN cueillette.date_cueillette AND CURRENT_DATE  
    GROUP BY
        parcelle.id_parcelle;
