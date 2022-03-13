let teamname,urlname,playercount,topbatsmen,topbowler,championshipwoncount;
function buttonclick(){
    teamname=document.getElementById("tname").value
    urlname=document.getElementById("uname").value
    playercount=document.getElementById("pcount").value
    topbatsmen=document.getElementById("topbatsmen").value
    topbowler=document.getElementById("topbowler").value
    championshipwoncount=document.getElementById("championshipcount").value
    const fs=require('fs');

    let team={
        tname: teamname,
        uname: urlname,
        pcount: playercount,
        topbat: topbatsmen,
        topbowl: topbowler,
        champc: championshipwoncount
    };
    console.log(team)
    fs.writeFileSync('./team_names.json', JSON.stringify(team) , 'utf-8');
}