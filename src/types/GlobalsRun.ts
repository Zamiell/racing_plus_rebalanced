import GlobalsRunHealth from "./GlobalsRunHealth";
import GlobalsRunLastHealth from "./GlobalsRunLastHealth";
import GlobalsRunLevel from "./GlobalsRunLevel";
import GlobalsRunPills from "./GlobalsRunPills";
import GlobalsRunRoom from "./GlobalsRunRoom";

// Per-run variables
export default class GlobalsRun {
  // Tracking per run
  randomSeed = 0;
  tearCounter = 0;

  // Tracking per level
  // We start at 0 instead of 1 so that we can trigger the PostNewRoom callback after the
  // PostNewLevel callback
  level = new GlobalsRunLevel(0, 0, 0);

  // Tracking per room
  room = new GlobalsRunRoom(true);

  // Miscellaneous variables
  pickingUpItem = 0; // Equal to the ID of the currently queued item
  pickingUpItemRoom = 0; // Equal to the room that we picked up the currently queued item
  pickingUpItemType = ItemType.ITEM_NULL; // Equal to the "QueuedItem.Item.Type"
  lastFireDirection = Direction.DOWN;
  dealingExtraDamage = false;
  familiarMultiShot = 0;
  familiarMultiShotVelocity = Vector(0, 0);
  rouletteTableRNG = 0;

  // Item variables
  monstroCounters = 0; // For Monstro's Tooth (86)
  monstroFrame = 0; // For Monstro's Tooth (86)
  wafer = false; // For The Wafer (108)
  waferCounters = 0; // For The Wafer (108)
  knifeCooldownFrames = 0; // For Mom's Knife (114)
  nineVoltFrame = 0; // For 9 Volt (116)
  spawningDeadBird = false; // For Dead Bird (117)
  blackBeanEndFrame = 0; // For The Black Bean (180)
  abelDoubleTear = false; // For Abel (188)
  fannyPackRNG = 0; // For Fanny Pack (204)
  piggyBankRNG = 0; // For Piggy Bank (227)
  technologyAdded2020 = false; // For 20/20 (245)
  spawningIsaacsHeartLaser = false; // For the Isaac's Heart (276)
  judasShadow = false; // For Judas' Shadow (311)
  holyMantle = false; // For Holy Mantle (313)
  wizDoubleTear = false; // For The Wiz (358)
  chargedBabyCounters = 0; // For Charged Baby (372)
  fartingBabyCounters = 0; // For Farting Baby (404)
  blackPowderActive = false; // For Black Powder (420)
  brownNuggetCounters = 0; // For Brown Nugget (504)
  brownNuggetFrame = 0; // For Brown Nugget (504)
  walnutCounters = 0; // For Walnut (108)
  spawningRestock = false; // For Clockwork Assembly
  strabismusDoubleTear = false; // For Strabismus
  catalogRNG = 0;

  // Trinket variables
  etherealPennyRNG = 0; // For Ethereal Penny
  numCoins = 0; // For Penny on a String

  // Card variables
  wheelOfFortuneRNG = 0; // For the Wheel of Fortune card (11)
  sunCardRNG = 0; // For the Sun card (20)

  // Pill variables
  pills: GlobalsRunPills = {
    // The randomly selected pill effects for this run
    effects: new Map<PillColor, PillEffect>(),

    // Stat up counters
    damageUp: 0,
    tearDelayDown: 0,

    // Timers
    superSadness: 0,
    invincibility: 0,
    reallyBadGas: 0,
    aether: 0,
    aetherAngle: 0,
    wallsHaveEyes: 0,
    wallsHaveEyesShooting: false,
    bladderInfection: 0,
    scorchedEarth: 0,
    familiarFrenzy: 0,
  };

  // Health tracking
  health: GlobalsRunHealth = {
    hearts: 0,
    maxHearts: 0,
    soulHearts: 0,
    blackHearts: 0,
    boneHearts: 0,
    changedOnThisFrame: false,
    restoredLastHealthOnThisFrame: false,
  };

  lastHealth: GlobalsRunLastHealth = {
    hearts: 0,
    maxHearts: 0,
    soulHearts: 0,
    blackHearts: 0,
    boneHearts: 0,
  };

  // Transformations
  transformations = new Map<PlayerForm, boolean>();

  constructor(startSeed: int) {
    this.randomSeed = startSeed;
    this.rouletteTableRNG = startSeed;
    this.fannyPackRNG = startSeed; // For Fanny Pack (204)
    this.piggyBankRNG = startSeed; // For Piggy Bank (227)
    this.catalogRNG = startSeed;
    this.etherealPennyRNG = startSeed; // For Ethereal Penny
    this.wheelOfFortuneRNG = startSeed; // For the Wheel of Fortune card (11)

    for (let i = 0; i < PlayerForm.NUM_PLAYER_FORMS; i++) {
      this.transformations.set(i, false);
    }
  }
}
