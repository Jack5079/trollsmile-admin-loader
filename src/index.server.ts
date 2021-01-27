/// <reference types="@rbxts/types/plugin" />

import { ServerScriptService } from '@rbxts/services'

export { }
let trollsmile = ServerScriptService.FindFirstChild('trollsmile') as Script | undefined
const toolbar = plugin.CreateToolbar("trollsmile")
const button = toolbar.CreateButton(
	"Load",
	`${trollsmile ? 'Update' : 'Insert'} trollsmile admin${trollsmile ? '' : ' into your game'}.${trollsmile ? ' THIS WILL OVERRIDE LOCAL CHANGES.' : ''}`,
	"rbxassetid://6110686361",
	`${trollsmile ? 'Update' : 'Insert'} trollsmile admin`
)

function insert () {
	button.SetActive(false)
	const [latestBuild] = game.GetObjects('rbxassetid://5685499094')


	if (trollsmile && trollsmile.Parent) {
		trollsmile.FindFirstChild('MainModule')?.Destroy()
		latestBuild.Parent = trollsmile
	} else {
		trollsmile = new Instance('Script', ServerScriptService)
		trollsmile.Source = `-- generated via trollsmile-admin-loader
require(script.MainModule).new({
	-- RANK, RANK NAMES & SPECIFIC USERS
	ranks = {
		-- trollsmile supports groups
		 --["tripleselect member"] = {
			--permission = 1,
			--group = 7332330, -- everyone in the group
			--
			--	-- or if you want roles
			--	group = {
			--		id = 7332330,
			--		rank = 254,
			--		-- rank = {254,253}, -- trollsmile even supports multiple roles for ranks
			--	},
			--
		 --}
		-- trollsmile supports gamepasses
		--VIP = {
		--	permission = 2,
		--	gamepass = 1032123123
		--}
		-- maybe you want a rank for your friends? trollsmile has support for that
		--Friends = {
		-- permission = 3,
		-- friendsWith = 78711965
		--}
		-- if you are living in 2009 trollsmile also supports assets instead of gamepasses
		--VIP = {
		-- permission = 2,
		-- asset = 1032123123
		--}
		-- and of course, you can always hardcode members
		-- ["Essem's (funny twitter user) Accounts"] = {
		-- 	people = {'SM64Roblox88', 'TheEssem'},
		--  permission = 4
		-- }
	};
	
	-- the prefix;
	prefix = 't!';
	
	-- the permission of the Player rank which is given to players without a rank
	-- defaults to 0
	permission = 0;
	
	-- for when you're not the owner of the game
	--overrideOwner = "trollface"; -- id or string
	
	-- should there be a welcome notif
	welcome = true;

	-- uncomment this if you want to use your own commands
	--commandsFolder = script.YourOwnCommands;
	
	-- enable this to give the developer of trollsmile admin owner (pls enable :D)
	devRank = false
})`
		trollsmile.Name = 'trollsmile'
		trollsmile.FindFirstChild('MainModule')?.Destroy()
		plugin.OpenScript(trollsmile, 3)
		latestBuild.Parent = trollsmile
	}
}
button.Click.Connect(insert)
