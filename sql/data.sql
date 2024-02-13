-- Insert data into admin
INSERT INTO admin (id_admin, nom_admin, mdp_admin) VALUES (1, 'Admin Name', 'SecurePassword123');

-- Insert data into variete_the
INSERT INTO variete_the (id_variete_the, nom_variete_the, occupation, rendement_pied) VALUES (1, 'Variety One',  0.8,  200.00);

-- Insert data into parcelle
INSERT INTO parcelle (id_parcelle, numero_parcelle, surface, id_variete_the) VALUES (1,  1001,  1000,  1);

-- Insert data into cueilleur
INSERT INTO cueilleur (id_cueilleur, nom_cueilleur, genre_cueilleur, date_naissance_cueilleur) VALUES (1, 'Cueilleur John',  1, '1985-01-01');

-- Insert data into genre
INSERT INTO genre (id_genre, nom_genre) VALUES (1, 'Male'), (2, 'Female');

-- Insert data into categorie_depense
INSERT INTO categorie_depense (id_categorie_depense, nom_depense) VALUES (1, 'Seeds'), (2, 'Equipment');

-- Insert data into utilisateur
INSERT INTO utilisateur (id_utilisateur, mdp_utilisateur) VALUES (1, 'user123');

-- Insert data into cueillette
INSERT INTO cueillette (id_cueillette, date_cueillette, id_cueilleur, id_parcelle, poid_cueilli) VALUES (1, '2024-02-12',  1,  1,  50.00);

-- Insert data into depense
INSERT INTO depense (id_depense, date_depense, id_categorie_depense, montant_depense, poids_cueilli) VALUES (1, '2024-02-11',  1,  100.00,  50.00);

-- Insert data into salaire
INSERT INTO salaire (id_salaire, id_cueilleur, montant, date_salaire) VALUES (1,  1,  5000.00, '2024-02-01');
