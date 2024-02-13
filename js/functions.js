function xmlHttpRequest() {
    var xhr; 
    try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
    catch (e) 
    {
        try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
        catch (e2) 
        {
           try {  xhr = new XMLHttpRequest();  }
           catch (e3) {  xhr = false;   }
         }
    }
    return xhr;
}

function sendData(form, method, action) {
    let xhr = xmlHttpRequest();

    xhr.addEventListener("error", function(event) {
        alert('Oups! Quelque choses\'est mal passe.');
    });

    let formData = new FormData(form);

    xhr.open(method, action, true);

    xhr.send(formData);

    xhr.onreadystatechange = function(event) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // alert(xhr.responseText);
                let returned = JSON.parse(xhr.responseText);
                    if (returned[0] == 0) {
                        alert(returned[1]);
                        }

                    else if (returned[0] == 1) {
                        alert(returned[1]);
                        }

                    else if (returned[0] == 2) {
                        alert(returned[1]);
                        window.location.href = 'pages/accueil.html';
                        }

                    else if (returned[0] == 3) {
                        alert(returned[1]);
                        window.location.href = 'admin_accueil.html';
                        }

                    else if (returned[0] == 4) {
                        let id = document.getElementById("id");
                        let nom = document.getElementById("nom");
                        let occupation = document.getElementById("occupation");
                        let rendement = document.getElementById("rendement");

                        id.value = returned[1].id_variete_the;
                        nom.value = returned[1].nom_variete_the;
                        occupation.value = returned[1].occupation;
                        rendement.value = returned[1].rendement_pied;
                    }

                    else if (returned[0] == 5) {
                        let id = document.getElementById('id');
                        let numero = document.getElementById('numero');
                        let surface = document.getElementById('surface');
                        let id_variete_the = document.getElementById('id_variete_the');

                        id.value = returned[1].id_parcelle;
                        numero.value = returned[1].numero_parcelle;
                        surface.value = returned[1].surface;
                        id_variete_the.value = returned[1].id_variete_the;
                    }

                    else if (returned[0] == 6) {
                        let id = document.getElementById('id');
                        let nom = document.getElementById('nom');
                        let genre = document.getElementById('genre');
                        let date_naissance = document.getElementById('date_naissance');

                        id.value = returned[1].id_cueilleur;
                        nom.value = returned[1].nom_cueilleur;
                        genre.value = returned[1].id_genre;
                        date_naissance.value = returned[1].date_naissance_cueilleur;
                    }

                    else if (returned[0] == 7) {
                        let id = document.getElementById('id');
                        let nom = document.getElementById('nom');

                        id.value = returned[1].id_categorie_depense;
                        nom.value = returned[1].nom_depense;
                    }

                    else if (returned[0] == 8) {
                        let id = document.getElementById('id');
                        let id_cueilleur = document.getElementById('id_cueilleur');
                        let montant = document.getElementById('montant');

                        id.value = returned[1].id_salaire;
                        id_cueilleur.value = returned[1].id_cueilleur;
                        montant.value = returned[1].montant;
                    }
            }
        }
    }
}

function getDefault(type, inputs, jsonPath) {
    let xhr = xmlHttpRequest();

    xhr.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passe.');
    });

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let returned = JSON.parse(xhr.responseText);
                if (returned[0] == 0) {
                    alert(returned[1]);
                } else if (returned[0] == -1) {
                    alert(returned[1]);
                    window.location.href = "../index.html"
                } else if (returned[0] == -2) {
                    alert(returned[1]);
                    window.location.href = "admin_index.html"
                } else if (returned[0] == 1) {
                    switch (type) {
                        case 'utilisateur':
                            inputs[0].value = returned[1].id_utilisateur;
                            inputs[1].value = returned[1].mdp_utilisateur;
                            break;

                        case 'admin':
                            inputs[0].value = returned[1].nom_admin;
                            inputs[1].value = returned[1].mdp_admin;
                            break;

                        case 'lead':
                            inputs.innerHTML += returned[1].nom_admin;
                            break;
                    }
                }
            }
        }
    }

    xhr.open("GET", jsonPath, true);

    xhr.send(null);
}

function deconnect(type) {
    let xhr = xmlHttpRequest();

    xhr.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passe.');
    });

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText);

                if (type == 1) {
                    window.location.href = "../index.html";
                }
                else if (type == 2) {
                    window.location.href = "admin_index.html";
                }
            }
        }
    }

    xhr.open("GET", "../php/deconnect.php", true);

    xhr.send(null);
}

function displayTable(tableName, table, jsonPath) {
    let xhr = xmlHttpRequest();

    xhr.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passe.');
    });

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let returned = JSON.parse(xhr.responseText);
                let body = '';
                
                for (let i = 0; i < returned.length; i++) {
                    let id = i;
                    if (tableName == 'variete_the') {
                            body += "<tr>";
                                body += "<td>" + returned[id].id_variete_the + "</td>";
                                body += "<td>" + returned[id].nom_variete_the + "</td>";
                                body += "<td>" + returned[id].occupation + "</td>";
                                body += "<td>" + returned[id].rendement_pied + "</td>";
                                body += "<td>" 
                                    body += "<form class=\"updateForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"update\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_variete_the + "\">";
                                        body += "<input class=\"btn btn-success\" type=\"submit\" value=\"Modifier\">"
                                    body += "</form>";
                                body += "</td>";
                                body += "<td>" 
                                    body += "<form class=\"deleteForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"delete\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_variete_the + "\">";
                                        body += "<input class=\"btn btn-danger\" type=\"submit\" value=\"Supprimer\">"
                                    body += "</form>";
                                body += "</td>";
                            body += "</tr>";

                    } else if (tableName == 'parcelle') {
                        body += "<tr>";
                            body += "<td>" + returned[id].id_parcelle + "</td>";
                            body += "<td>" + returned[id].numero_parcelle + "</td>";
                            body += "<td>" + returned[id].surface + "</td>";
                            body += "<td>" + returned[id].nom_variete_the + "</td>";
                            body += "<td>" 
                                    body += "<form class=\"updateForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"update\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_parcelle + "\">";
                                        body += "<input class=\"btn btn-success\" type=\"submit\" value=\"Modifier\">"
                                    body += "</form>";
                                body += "</td>";
                                body += "<td>" 
                                    body += "<form class=\"deleteForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"delete\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_parcelle + "\">";
                                        body += "<input class=\"btn btn-danger\" type=\"submit\" value=\"Supprimer\">"
                                    body += "</form>";
                                body += "</td>";
                        body += "</tr>";
                    } else if (tableName == 'cueilleur') {
                        body += "<tr>";
                            body += "<td>" + returned[id].id_cueilleur + "</td>";
                            body += "<td>" + returned[id].nom_cueilleur + "</td>";
                            body += "<td>" + returned[id].nom_genre + "</td>";
                            body += "<td>" + returned[id].date_naissance_cueilleur + "</td>";
                            body += "<td>" 
                                    body += "<form class=\"updateForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"update\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_cueilleur + "\">";
                                        body += "<input class=\"btn btn-success\" type=\"submit\" value=\"Modifier\">"
                                    body += "</form>";
                                body += "</td>";
                                body += "<td>" 
                                    body += "<form class=\"deleteForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"delete\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_cueilleur + "\">";
                                        body += "<input class=\"btn btn-danger\" type=\"submit\" value=\"Supprimer\">"
                                    body += "</form>";
                                body += "</td>";
                        body += "</tr>";
                    } else if (tableName == 'categorie_depense') {
                        body += "<tr>";
                            body += "<td>" + returned[id].id_categorie_depense + "</td>";
                            body += "<td>" + returned[id].nom_depense + "</td>";
                            body += "<td>" 
                                    body += "<form class=\"updateForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"update\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_categorie_depense + "\">";
                                        body += "<input class=\"btn btn-success\" type=\"submit\" value=\"Modifier\">"
                                    body += "</form>";
                                body += "</td>";
                                body += "<td>" 
                                    body += "<form class=\"deleteForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"delete\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_categorie_depense + "\">";
                                        body += "<input class=\"btn btn-danger\" type=\"submit\" value=\"Supprimer\">"
                                    body += "</form>";
                                body += "</td>";
                        body += "</tr>";
                    } else if (tableName == 'salaire') {
                        body += "<tr>";
                            body += "<td>" + returned[id].id_salaire + "</td>";
                            body += "<td>" + returned[id].nom_cueilleur + "</td>";
                            body += "<td>" + returned[id].montant + "</td>";
                            body += "<td>" 
                                    body += "<form class=\"updateForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"update\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_salaire + "\">";
                                        body += "<input class=\"btn btn-success\" type=\"submit\" value=\"Modifier\">"
                                    body += "</form>";
                                body += "</td>";
                                body += "<td>" 
                                    body += "<form class=\"deleteForm\">";
                                        body += "<input type=\"hidden\" name=\"mode\" value=\"delete\">";
                                        body += "<input type=\"hidden\" name=\"id\" value=\"" + returned[id].id_salaire + "\">";
                                        body += "<input class=\"btn btn-danger\" type=\"submit\" value=\"Supprimer\">"
                                    body += "</form>";
                                body += "</td>";
                        body += "</tr>";
                    }
                }

                table.innerHTML = body;

                let path = '';
                if (tableName == 'variete_the') {
                    path = '../php/gestion_variete_the.php';
                } else if (tableName == 'parcelle') {
                    path = '../php/gestion_parcelle.php';
                } else if (tableName == 'cueilleur') {
                    path = '../php/gestion_cueilleur.php';
                } else if (tableName == 'categorie_depense') {
                    path = '../php/gestion_categorie_depense.php';
                } else if (tableName == 'salaire') {
                    path = '../php/configuration_salaire.php';
                }

                    let updateForm = document.getElementsByClassName('updateForm');

                    for (let i = 0; i < updateForm.length; i++) {
                        let id = i;

                        updateForm[id].addEventListener("submit", function(event) {
                            event.preventDefault();

                            sendData(updateForm[id], 'POST', path);
                            displayTable(tableName, table, jsonPath);
                        });


                    let deleteForm = document.getElementsByClassName('deleteForm');
                    for (let i = 0; i < deleteForm.length; i++) {
                        let id = i;
                        deleteForm[id].addEventListener("submit", function(event) {
                            event.preventDefault();

                            sendData(deleteForm[id], 'POST', path);
                            displayTable(tableName, table, jsonPath);
                        });
                    }
                }
            }
        }
    }

    xhr.open("GET", jsonPath, true);

    xhr.send(null);
}

function generateSelect(tableName, select, jsonPath) {
    let xhr = xmlHttpRequest();

    xhr.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passe.');
    });

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let returned = JSON.parse(xhr.responseText);
                let option = '';
                
                for (let i = 0; i < returned.length; i++) {
                    let id = i;
                    if (tableName == 'variete_the') {
                            option += "<option value=\"" + returned[id].id_variete_the + "\">" + returned[id].nom_variete_the + "</option>";
                    } else if (tableName == 'genre') {
                        option += "<option value=\"" + returned[id].id_genre + "\">" + returned[id].nom_genre + "</option>";
                    } else if (tableName == 'cueilleur') {
                        option += "<option value=\"" + returned[id].id_cueilleur + "\">" + returned[id].nom_cueilleur + "</option>";
                    }
                }

                select.innerHTML = option;
            }
        }
    }

    xhr.open("GET", jsonPath, true);

    xhr.send(null);
}