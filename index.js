module.exports = function ServerIdentifier(mod) {
	
	let ShowSameServer = false; // To Show Same-Server name , set this to True and remove the '//' from line 16 .
	let enabled = false;
	let CSid;
	let S = { 
					26: '[ Killian ]' ,
					27: '[ Mystel ]'  ,
					28:' [ Yurian ] ' ,
					29:' [ Seren ] ' ,
			};
	

	mod.command.add(['si','ServerIdentifier'], {
		$none() {
			//ShowSameServer = !ShowSameServer, 
			enabled = !enabled
			mod.command.message(`       <font color="#954193">Server Identifier : </font> <font color="#ffff00">${enabled ? 'Enabled' : 'Disabled'} </font> - ( Disabled by default ) `)
		}
	})	
	
	
	mod.hook('S_LOGIN', 10, (event) => {
        CSid = event.serverId;
    });
	
	mod.hook('S_SPAWN_USER',13, event =>{
		if(enabled){
			if(ShowSameServer)
				{
					if (S[event.serverId])
					  {
						event.name = event.name + ' : ' + S[event.serverId]
						return true;
			
					  }	
				}
			else if (!ShowSameServer)
				{
					if (CSid != event.serverId)
					{
						if (S[event.serverId])
						  {
							event.name = event.name + ' : ' + S[event.serverId]
							return true;
						  }
					}
				}
		
		}
		
	
	})
	

	

	
	
	
	
	
	
}