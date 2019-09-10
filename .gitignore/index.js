const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login(process.env.NTk4MjY0MDc5MTYwODM2MTQx.XXeWEg.xyXxgFrGSEs4k6wRzbFcj3rtbo4);

client.commands = new Discord.Collection();

fs.readdir("./Commandes/",(error, f) => {
    if(error) console.log(error);

    let Commandes = f.filter(f => f.split(".").pop() === "js");
    if(Commandes.length <= 0) return console.log("Aucune commandes trouvée !");

    Commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);    
    });

});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];
    
    client.on(event, events.bind(null, client));
    });
});

/*Partie Message Joint et Role Des Nouveaux*/

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription('**Bienvenue à toi mon petit **' + member.user.username + '**Sur le discord de la WhiplashFamilly**')
    member.guild.channels.get('517613093719900162').send(embed)
    member.addRole('517613763420094465')
});

