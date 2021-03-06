const { combineQueryMutations } = require('../utility/createField')

const types =[
  require('./blog'),
  require('./clientAccount'),
  require('./clientAuthenticate'),
  require('./clientChallenge'),
  require('./clientGame'),
  require('./clientLocation'),
  require('./clientNotification'),
  require('./clientPlatform'),
  require('./clientPlayer'),
  require('./clientPowerRanking'),
  require('./clientRaffle'),
  require('./clientStreaming'),
  require('./clientSupport'),
  require('./clientTeam'),
  require('./clientTournament'),
  require('./clientTournamentMatch'),
  require('./clientTournamentSeries'),
  require('./clientWallet'),
  require('./controlCache'),
  require('./controlFile'),
  require('./controlGame'),
  require('./controlInfusionsoft'),
  require('./controlLocation'),
  require('./controlLookups'),
  require('./controlMarketing'),
  require('./controlPayment'),
  require('./controlPlatform'),
  require('./controlPlayer'),
  require('./controlPowerRanking'),
  require('./controlRaffle'),
  require('./controlTournament'),
  require('./controlTournamentMatch'),
  require('./controlTournamentSeries'),
  require('./controlWallet'),
  require('./gameServerGame'),
  require('./gameServerPlatform'),
  require('./gameServerServer'),
  require('./gameServerTournamentMatch'),
  require('./pollingChallenge'),
  require('./pollingNotifications'),
  require('./pollingPlatform'),
  require('./pollingPlayer'),
  require('./pollingTeam'),
  require('./pollingTournament'),
  require('./pollingTournamentMatch'),
  require('./pollingWallet'),
  require('./todo')
]

module.exports = combineQueryMutations(...types)
