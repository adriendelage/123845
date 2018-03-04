const Discord = require('discord.js');

const TOKEN = 'MzQ2OTQ2OTU0MzUxMDgzNTIx.DLGx5w.DGqQcQUdSH5m1DkUNBVkO5eR9uw';
const PREFIX = '';

var bot = new Discord.Client(); 

bot.on('ready', function() {
    console.log('Ready');
	console.log('Bot has started, with '+ bot.users.size + ' users, in ' + bot.channels.size +' channels of ' + bot.guilds.size + ' guilds'); 
});

bot.on('message', function(message) {

    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0].toLowerCase()) {
        case 'bienvenue':
            message.channel.sendMessage('Bonjour et bienvenue sur le discord de Chemillé ! Attention aux magicarpes ;)');
            break;
		case 'bonjour tout le monde':
			message.channel.sendMessage('Salut, la forme ?');
			break;
		case 'bonsoir':
			message.channel.sendMessage('Bonne soirée à toi, ' + message.author + " " );
		break;	
        case 'ping':
            message.channel.sendMessage('Pong!');
            break;
		case 'a':
			switch (args[1]) {
				case 'demain':
					message.channel.sendMessage('Bonne nuit, A demain ' + message.author + ", j'espère te revoir bientôt !");
					message.react("🌜");
					message.react("💤");
				break;
			}
			case 'pas':
			switch (args[1]) {
				case 'gentil':
					message.react("😱");
					message.react("😥");
				break;
			}
		case '!pool' :
		
			switch (args[1]) {
				case 'tyra' :
					message.channel.sendMessage("", {embed: {
						title: "Demande de raid :",
						color: 0xff0000,
						description: " :pikachu: Souhaitez vous faire le raid " + args[1] + " ?",
						thumbnail: {
							url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZbvI-UTD4M-mDnUuld-MMLNU_j420uu84pZxVxpDnbIqxMwuw"
						},
						footer: {
							text: "Merci d'indiquer votre réponse avec les réaction ci-desous."
						}
					}}).catch(console.error);
				break; 
				var args = message.content.substr(4);
				if(args.length === 0){
					message.channel.sendMessage('veuillez indiquer le raid souhaité ' + message.author);}
				break;
			}
		
		case '':
			message.channel.sendMessage('');
			break;
		
			
		//default:
           // message.channel.sendMessage('Invalid command');
        //break;
    }
	
	
	if (message.content.startsWith("!raid")) {
		var args = message.content.substr(6);
      if(args.length === 0){
        message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x: Vous n'avez pas préciser le raid :x: ",
          footer: {
            text: "Réessayez !"
          }
        }});
      }
      else {
        //var msg;
        //if(args.length === 1){
        //msg = 2;
      //} else {
       // msg = parseInt(args[1]);
      //}
      //message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
	  var compomsg = message.content.substring(PREFIX.length).split(' ');
	  var longueur = compomsg.length;
	  var nompoke = compomsg[1];
	  var arene = "";
	  for (i=2; i<longueur-1 ; i++) {
	  var arene = arene + compomsg[i] + " ";
	  }
	  var horaire = "";
	  var horaire = horaire + compomsg[i];

	  var lien = " ";
	  
	  if (nompoke === 'groudon') { lien = "https://vignette.wikia.nocookie.net/pokemontowerdefense3/images/d/d5/Groudon.png/revision/latest?cb=20140801092618"; };
	  if (nompoke === 'Groudon') { lien = "https://vignette.wikia.nocookie.net/pokemontowerdefense3/images/d/d5/Groudon.png/revision/latest?cb=20140801092618"; };
	  if (nompoke === 'mysdibule') { lien = "http://www.pokepedia.fr/images/thumb/c/cd/Mysdibule-RS.png/375px-Mysdibule-RS.png"; };
	  if (nompoke === "absol") { lien = "https://vignette.wikia.nocookie.net/pixelmon/images/7/7d/Absol.png/revision/latest?cb=20140609182823"; };
	  if (nompoke === 'magnéton') { lien = "https://vignette.wikia.nocookie.net/pokken/images/d/d1/Magneton.png/revision/latest?cb=20160524233039"; };
	  if (nompoke === 'ho-oh') { lien = "http://www.pokepedia.fr/images/thumb/4/40/Ho-Oh-HGSS.png/250px-Ho-Oh-HGSS.png"; };
	  if (nompoke === 'hoho') { lien = "http://www.pokepedia.fr/images/thumb/4/40/Ho-Oh-HGSS.png/250px-Ho-Oh-HGSS.png"; };
	  if (nompoke === 'ho-ho') { lien = "http://www.pokepedia.fr/images/thumb/4/40/Ho-Oh-HGSS.png/250px-Ho-Oh-HGSS.png"; };
	  if (nompoke === 'ténefix') { lien = "https://68.media.tumblr.com/cbf068e92fa82e24222e5c344497eda1/tumblr_n2289y6AXv1ttzobeo1_500.png"; };
	  if (nompoke === 'sablaireau') { lien = "http://www.pokepedia.fr/images/thumb/a/a1/Sablaireau-RFVF.png/250px-Sablaireau-RFVF.png"; };
	  if (nompoke === 'tentacruel') { lien = "http://static.pokemonpets.com/images/monsters-images-800-800/73-Tentacruel.png"; };
	  if (nompoke === 'ossatueur') { lien = "http://groudon05.g.r.pic.centerblog.net/fsd1mzcf.gif"; };
	  if (nompoke === 'crustabri') { lien = "http://www.pokepedia.fr/images/6/61/Sprite_6_g_091.png"; };
	  if (nompoke === 'feunard') { lien = "http://www.pokepedia.fr/images/thumb/1/13/Feunard_Pokken_Tournament.png/119px-Feunard_Pokken_Tournament.png"; };
	  if (nompoke === 'insécateur') { lien = "https://www.eternia-dimension.com/wiki/images/2/29/Insecateur_Echange.png"; };
	  if (nompoke === 'amonistar') { lien = "http://www.pokepedia.fr/images/thumb/f/f2/Amonistar-RFVF.png/250px-Amonistar-RFVF.png"; };
	  if (nompoke === 'porygon') { lien = "http://www.virtuadopt.com/images/big_adoptbase/67-1.png"; };
	  if (nompoke === 'empiflor') { lien = "https://poketheque.files.wordpress.com/2014/06/empiflor-eat-james.png"; };
	  if (nompoke === 'tartard') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/Pokemon_GO_fonds_blanc/pokemon_go_tartard.png"; };
	  if (nompoke === 'grolem') { lien = "http://www.pokepedia.fr/images/thumb/a/a3/Grolem-RFVF.png/250px-Grolem-RFVF.png"; };
	  if (nompoke === 'nidoking') { lien = "https://orig00.deviantart.net/4f8d/f/2016/178/8/5/034_nidoking_by_tzblacktd-da7v7gc.png"; };
	  if (nompoke === 'nidoqueen') { lien = "https://vignette.wikia.nocookie.net/nintendo/images/4/43/Nidoqueen.png/revision/latest?cb=20151022215827&path-prefix=en"; };	  
	  if (nompoke === 'carabaffe') { lien = "http://i49.servimg.com/u/f49/17/09/73/53/008_ca10.png"; };
	  if (nompoke === 'reptincel') { lien = "http://www.pokepedia.fr/images/7/79/Sprite_6_g_005.png"; };
	  if (nompoke === 'chrysacier') { lien = "http://3.bp.blogspot.com/-GIfDKpP2vWw/VTzNVbITCLI/AAAAAAAAAAM/Zb7HRb8CA3Y/s1600/metatroll.png"; };
	  if (nompoke === 'herbizarre') { lien = "http://www.pokepedia.fr/images/thumb/f/f7/Herbizarre_SSBB.png/300px-Herbizarre_SSBB.png"; };
	  if (nompoke === 'suicune') { lien = "https://vignette.wikia.nocookie.net/pokemongo/images/c/c3/Suicune.png/revision/latest?cb=20170901004012"; };
	  if (nompoke === 'raikou') { lien = "https://vignette.wikia.nocookie.net/pokemongo/images/d/d6/Raikou.png/revision/latest?cb=20170901003801"; };
	  if (nompoke === 'tyra' ) { lien ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZbvI-UTD4M-mDnUuld-MMLNU_j420uu84pZxVxpDnbIqxMwuw"};
	  if (nompoke === 'tyranocif' ) { lien ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZbvI-UTD4M-mDnUuld-MMLNU_j420uu84pZxVxpDnbIqxMwuw"};
	  if (nompoke === 'ronflex') { lien = "http://www.pokepedia.fr/images/2/2b/Ronflex-RFVF.png"; };
	  if (nompoke === 'lokhlass') { lien = "http://i68.servimg.com/u/f68/18/96/84/67/131lap10.png"; };
	  if (nompoke === 'lockhlass') { lien = "http://i68.servimg.com/u/f68/18/96/84/67/131lap10.png"; };
	  if (nompoke === 'rhinoféros') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/Pokemon_GO_fonds_blanc/pokemon_go_rhinoferos.png"; };
	  if (nompoke === 'rhino') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/Pokemon_GO_fonds_blanc/pokemon_go_rhinoferos.png"; };
	  if (nompoke === 'tortank') { lien = "http://www.renders-graphiques.fr/image/upload/normal/Tortank.png"; };
	  if (nompoke === 'dracaufeu') { lien = "http://www.pokepedia.fr/images/thumb/d/dc/Dracaufeu-pokken-tournament.png/200px-Dracaufeu-pokken-tournament.png"; };
	  if (nompoke === 'florizarre') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/Pokemon_GO_fonds_blanc/pokemon_go_florizarre.png"; };
	  if (nompoke === 'pyroli') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/Pokemons_fond_blanc/pokemon_fond_blanc_pyroli.png"; };
	  if (nompoke === 'voltali') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/Pokemons_fond_blanc/pokemon_fond_blanc_voltali.png"; };
	  if (nompoke === 'aquali') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/Pokemons_fond_blanc/pokemon_fond_blanc_aquali.png"; };
	  if (nompoke === 'ectoplasma') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/Pokemons_fond_blanc/pokemon_ectoplasma_03_png.png"; };
	  if (nompoke === 'mackogneur') { lien = "http://www.pokepedia.fr/images/thumb/e/ee/Mackogneur-RFVF.png/250px-Mackogneur-RFVF.png"; };
	  if (nompoke === 'alakazam') { lien = "http://www.propokemon.com/wp-content/uploads/2016/05/065Alakazam-1.png"; };
	  if (nompoke === 'arcanin') { lien = "http://img3.wikia.nocookie.net/__cb20140902043233/pokemon/images/a/a8/059Arcanine_AG_anime.png"; };
	  if (nompoke === 'magmar') { lien = "https://vignette4.wikia.nocookie.net/nintendo/images/4/46/Magmar.png/revision/latest?cb=20141002085225&path-prefix=en"; };
	  if (nompoke === 'elektek') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/Pokemon_GO_fonds_blanc/pokemon_go_elektek.png"; };
	  if (nompoke === 'smogogo') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/Pokemon_GO_fonds_blanc/pokemon_go_smogogo.png"; };
	  if (nompoke === 'grotadmorv') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/Pokemon_GO_fonds_blanc/pokemon_go_grotadmorv.png"; };
	  if (nompoke === 'noadkoko') { lien = "http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/Pokemons_fond_blanc/pokemon_noadkoko_png.png"; };
	  if (nompoke === 'crocrodil') { lien = "https://eternia.fr/public/media/pokedex/pgl/159.png"; };
	  if (nompoke === 'Kyogre') { lien = "http://static.pokemonpets.com/images/monsters-images-800-800/10382-Shiny-Mega-Kyogre.png"; };
	  if (nompoke === 'kyogre') { lien = "http://static.pokemonpets.com/images/monsters-images-800-800/10382-Shiny-Mega-Kyogre.png"; };
	  if (nompoke === 'feurisson') { lien = "http://www.pokepedia.fr/images/thumb/8/8a/Feurisson-HGSS.png/250px-Feurisson-HGSS.png"; };
	  if (nompoke === 'macronium') { lien = "http://www.pokepedia.fr/images/thumb/d/db/Macronium-HGSS.png/250px-Macronium-HGSS.png"; };
	  if (nompoke === 'Empiflor') { lien = "https://poketheque.files.wordpress.com/2014/06/empiflor-eat-james.png"; };
	  if (nompoke === 'rayquaza') { lien = "https://vignette.wikia.nocookie.net/fantendo/images/6/66/Rayquaza.png"; };
	  if (nompoke === 'Rayquaza') { lien = "https://vignette.wikia.nocookie.net/fantendo/images/6/66/Rayquaza.png"; };
	  if (nompoke === 'Tylton') { lien = "https://raw.githubusercontent.com/ZeChrales/monocle-icons/larger-outlined/original-icons/333.png"; };
	  if (nompoke === 'tylton') { lien = "https://raw.githubusercontent.com/ZeChrales/monocle-icons/larger-outlined/original-icons/333.png"; };
	  if (nompoke === 'Aligatueur') { lien = "https://raw.githubusercontent.com/ZeChrales/monocle-icons/larger-outlined/original-icons/160.png"; };
	  if (nompoke === 'aligatueur') { lien = "https://raw.githubusercontent.com/ZeChrales/monocle-icons/larger-outlined/original-icons/160.png"; };
	  if (nompoke === 'Galeking') { lien = "https://raw.githubusercontent.com/ZeChrales/monocle-icons/larger-outlined/original-icons/306.png"; };
	  if (nompoke === 'galeking') { lien = "https://raw.githubusercontent.com/ZeChrales/monocle-icons/larger-outlined/original-icons/306.png"; };
	  if (nompoke === 'magicarpe') { lien = "http://vignette1.wikia.nocookie.net/pokemon/images/5/5b/129Magikarp_OS_anime_2.png/revision/latest?cb=20150101075047"; };
	  if (nompoke === 'help') { message.channel.sendMessage("Pour proposer un raid : !raid <nom du pokemon> <nom de l'arene> <horaire propose>\nEx : !raid Mewtwo Jupiter 8h30"); lien = "1";};
	  if (lien === ' ') { message.channel.sendMessage("Erreur, vérifie le nom de ton pokemon");}
	  //else message.channel.sendMessage("Merci de verifier le nom du pokemon indique" ) break;
      else { message.channel.sendMessage("@everyone", {embed: {
						title: "Demande de raid :",
						color: 0xff0000,
						description: "Souhaitez vous faire le raid " + compomsg[1] + "\nà l'arène "+ arene + "à " + horaire + " :question:\n:regional_indicator_y: : OUI ou :regional_indicator_n: : NON",
						thumbnail: {
							//url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZbvI-UTD4M-mDnUuld-MMLNU_j420uu84pZxVxpDnbIqxMwuw"},
							url: lien },
						footer: {
							text: "Merci d'indiquer votre réponse avec les réactions ci-dessous."
						}
					}})
					.then(function (message) {
              message.react("🇾")// obtenir le unicode de l'émoji : taper " \:regional_indicator_y: " sur discord surtout avec l'antislash , copier coller le resultat ici
              message.react("🇳")
              //message.pin()
              //message.delete()
			  lien === "";
			  lien = "";
            }).catch(console.error);
			}
					
      }
}
	
});

bot.login(TOKEN);
