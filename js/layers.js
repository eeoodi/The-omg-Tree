addLayer("j", {
    name: "japan", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "j", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#a14040",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "japise", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
        rows: 1 ,
        cols: 1 ,
        11: {
            description: "Blah",
            cost: new Decimal(1),
            unl() { return player.p.unl },
        },
        rows: 1 ,
        cols: 2 ,
        12: {
            description: "Blah2",
            cost: new Decimal(3),
            unl() { return player.p.unl },
        },
        rows: 1 ,
        cols: 3 ,
        13: {
            description: "Blah3",
            cost: new Decimal(6),
            unl() { return player.p.unl },
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "j", description: "Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

