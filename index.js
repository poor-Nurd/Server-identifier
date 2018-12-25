module.exports = function ServerIdentifier(mod) { //Nurd#1025
	let zone = -1;
	let S = {
		26: ' :  Killian  : ',
		27: ' :  Mystel  : ',
		28: ' :  Yurian  : ',
		29: ' :  Seren  : ',
	};

	mod.command.add(['si','ServerIdentifier'], {
		$none() {
			mod.settings.enabled = !mod.settings.enabled;
			mod.command.message(`<font color="#954193">Server Identifier : </font> <font color="#ffff00">${enabled ? 'Enabled' : 'Disabled'} </font> `);
		}
	});	

	mod.hook('S_LOAD_TOPO', 3, (event) => { zone = event.zone; });

	mod.hook('S_SPAWN_USER',13, (event) => {
		if(!mod.settings.enabled || zone <= 8999) return;
		if (S[event.serverId]) {
			event.guild = `  ${event.guild} ${[event.serverId]}  `
			return true;
		}
	});
}