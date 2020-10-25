const db = require('../db/models')
const { v4: uuidv4 } = require('uuid')
const ac = require('../lib/roles')
const cache = require('memory-cache')

const getAllPlayers = async (req, res) => {
  const permission = await ac.can(req.user.role).readAny('players')
  if (!permission.granted) throw new Error('NoPermission')

  const players = await db.Player.findAll({
    include: [db.Room],
    where: {
      role: 'player',
    },
  })
  res.json({ players })
}

const getAllRooms = async (req, res) => {
  const permission = await ac.can(req.user.role).readAny('rooms')
  if (!permission.granted) throw new Error('NoPermission')

  const rooms = await db.Room.findAll({
    include: [db.Log],
  })
  res.json({ rooms })
}


module.exports = {
  getAllPlayers,
  getAllRooms,
}
