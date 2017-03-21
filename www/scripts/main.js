window.onload = function () {
    function randomNo(x, y) {
        return Math.floor(Math.random() * ((y - x) + 1) + x);
    }

    //Make a new variable called game and set it as a Canvas with the dimensions 1000, 750 (OLD: 1000, 563) <- Do not delete
    var game = new Phaser.Game(1000, 563, Phaser.CANVAS);

    var enPlayButton;
    var enPlayButtonX = 100;
    var enPlayButtonY = 100;
    var enOptionsButton;
    var enOptionsButtonX = 116;
    var enOptionsButtonY = 175;
    var DigitalBullStudiosButton;
    var DigitalBullStudiosButtonX = 120;
    var DigitalBullStudiosButtonY = 238;
    var enSoundOnButton;
    var enSoundOnButtonX = 100;
    var enSoundOnButtonY = 100;
    var enSoundOffButton;
    var enSoundOffButtonX = 96;
    var enSoundOffButtonY = 100;
    var enParallaxOnButton;
    var enParallaxOnButtonX = 100;
    var enParallaxOnButtonY = 175;
    var enParallaxOffButton;
    var enParallaxOffButtonX = 100;
    var enParallaxOffButtonY = 175;
    var enLanguageButton;
    var enLanguageButtonX = 100;
    var enLanguageButtonY = 250;
    var enResetScoreButton;
    var enResetScoreButtonX = 100;
    var enResetScoreButtonY = 327;
    var enAYS;
    var enAYSX = game.width / 2 - 20;
    var enAYSY = 100;
    var enYes;
    var enYesX = game.width / 2 - 50;
    var enYesY = 200;
    var enNo;
    var enNoX = game.width / 2 + 150;
    var enNoY = 200;
    var enBackButton;
    var enBackButtonX = 88;
    var enBackButtonY = 400;
    var frPlayButton;
    var frPlayButtonX = 110;
    var frPlayButtonY = 112;
    var frOptionsButton;
    var frOptionsButtonX = 116;
    var frOptionsButtonY = 175;
    var frSoundOnButton;
    var frSoundOnButtonX = 100;
    var frSoundOnButtonY = 100;
    var frSoundOffButton;
    var frSoundOffButtonX = 96;
    var frSoundOffButtonY = 100;
    var frParallaxOnButton;
    var frParallaxOnButtonX = 100;
    var frParallaxOnButtonY = 175;
    var frParallaxOffButton;
    var frParallaxOffButtonX = 97;
    var frParallaxOffButtonY = 175;
    var frLanguageButton;
    var frLanguageButtonX = 95;
    var frLanguageButtonY = 250;
    var frResetScoreButton;
    var frResetScoreButtonX = 100;
    var frResetScoreButtonY = 327;
    var frAYS;
    var frAYSX = game.width / 2 - 20;
    var frAYSY = 100;
    var frYes;
    var frYesX = game.width / 2 - 50;
    var frYesY = 200;
    var frNo;
    var frNoX = game.width / 2 + 100;
    var frNoY = 200;
    var frBackButton;
    var frBackButtonX = 100;
    var frBackButtonY = 400;
    var gerPlayButton;
    var gerPlayButtonX = 110;
    var gerPlayButtonY = 112;
    var gerOptionsButton;
    var gerOptionsButtonX = 116;
    var gerOptionsButtonY = 175;
    var gerSoundOnButton;
    var gerSoundOnButtonX = 92;
    var gerSoundOnButtonY = 100;
    var gerSoundOffButton;
    var gerSoundOffButtonX = 99;
    var gerSoundOffButtonY = 100;
    var gerParallaxOnButton;
    var gerParallaxOnButtonX = 100;
    var gerParallaxOnButtonY = 175;
    var gerParallaxOffButton;
    var gerParallaxOffButtonX = 98;
    var gerParallaxOffButtonY = 175;
    var gerLanguageButton;
    var gerLanguageButtonX = 97;
    var gerLanguageButtonY = 250;
    var gerResetScoreButton;
    var gerResetScoreButtonX = 92;
    var gerResetScoreButtonY = 325;
    var gerAYS;
    var gerAYSX = game.width / 2;
    var gerAYSY = 100;
    var gerYes;
    var gerYesX = game.width / 2 - 25;
    var gerYesY = 200;
    var gerNo;
    var gerNoX = game.width / 2 + 135;
    var gerNoY = 200;
    var gerBackButton;
    var gerBackButtonX = 102;
    var gerBackButtonY = 400;
    var Gravity = 800;
    var strengthBar;
    var PowerTween;
    var NumberOfPlatforms;
    var Platforms;
    var minimumPlatformGap = 100;
    var maximumPlatformGap = 300;
    var Language = "English";
    //Original LevelType (Will only affect first menus before game as it redefines before playing)
    var LevelType = "Hilly"; //Hilly, City Day, City Night
    var HasSound = true;
    var IsParallax = true;
    //Set the game speed (Used to calculate variables such as background speeds)
    var gameSpeed = 2;
    var player;
    //How long the player has been holding down jump
    var PlayerStrength;
    var score = 0;
    var bestScore;
    var IsJumping;
    var IsFalling;
    //How many jumps have they had since they last touched a platform
    var jumps;
    //How many jumps are they allowed to have after they touch a platform
    var ExtraJumps = 1;
    var scoreText;
    var hillyBackgroundSky1;
    var hillyBackgroundSky1Xpos = 0;
    var hillyBackgroundSky1Ypos = 0;
    var hillyBackgroundSky2;
    var hillyBackgroundSky2Xpos = -1199;
    var hillyBackgroundSky2Ypos = 0;
    var hillyBackgroundBackHills1;
    var hillyBackgroundBackHills1Xpos = 0;
    var hillyBackgroundBackHills1Ypos = 0;
    var hillyBackgroundBackHills2;
    var hillyBackgroundBackHills2Xpos = -1199;
    var hillyBackgroundBackHills2Ypos = 0;
    var hillyBackgroundFrontHills1;
    var hillyBackgroundFrontHills1Xpos = 0;
    var hillyBackgroundFrontHills1Ypos = 0;
    var hillyBackgroundFrontHills2;
    var hillyBackgroundFrontHills2Xpos = -1199;
    var hillyBackgroundFrontHills2Ypos = 0;
    var hillyBackgroundFence1;
    var hillyBackgroundFence1Xpos = 0;
    var hillyBackgroundFence1Ypos = 0;
    var hillyBackgroundFence2;
    var hillyBackgroundFence2Xpos = -1199;
    var hillyBackgroundFence2Ypos = 0;
    var hillyBackgroundClouds1;
    var hillyBackgroundClouds1Xpos = 0;
    var hillyBackgroundClouds1Ypos = 0;
    var hillyBackgroundClouds2;
    var hillyBackgroundClouds2Xpos = -1199;
    var hillyBackgroundClouds2Ypos = 0;
    var cityDayBackgroundBuildings1;
    var cityDayBackgroundBuildings1Xpos = 0;
    var cityDayBackgroundBuildings1Ypos = 0;
    var cityDayBackgroundBuildings2;
    var cityDayBackgroundBuildings2Xpos = -1199;
    var cityDayBackgroundBuildings2Ypos = 0;
    var cityDayBackgroundRoad1;
    var cityDayBackgroundRoad1Xpos = 0;
    var cityDayBackgroundRoad1Ypos = 0;
    var cityDayBackgroundRoad2;
    var cityDayBackgroundRoad2Xpos = -1199;
    var cityDayBackgroundRoad2Ypos = 0;
    var cityDayBackgroundSky1;
    var cityDayBackgroundSky1Xpos = 0;
    var cityDayBackgroundSky1Ypos = 0;
    var cityDayBackgroundSky2;
    var cityDayBackgroundSky2Xpos = -1199;
    var cityDayBackgroundSky2Ypos = 0;
    var cityNightBackgroundBuildings1;
    var cityNightBackgroundBuildings1Xpos = 0;
    var cityNightBackgroundBuildings1Ypos = 0;
    var cityNightBackgroundBuildings2;
    var cityNightBackgroundBuildings2Xpos = -1199;
    var cityNightBackgroundBuildings2Ypos = 0;
    var cityNightBackgroundRoad1;
    var cityNightBackgroundRoad1Xpos = 0;
    var cityNightBackgroundRoad1Ypos = 0;
    var cityNightBackgroundRoad2;
    var cityNightBackgroundRoad2Xpos = -1199;
    var cityNightBackgroundRoad2Ypos = 0;
    var cityNightBackgroundSky1;
    var cityNightBackgroundSky1Xpos = 0;
    var cityNightBackgroundSky1Ypos = 0;
    var cityNightBackgroundSky2;
    var cityNightBackgroundSky2Xpos = -1199;
    var cityNightBackgroundSky2Ypos = 0;
    var homeButton;
    var homeButtonX = 320;
    var homeButtonY = 281;
    var restartButton;
    var restartButtonX = 520;
    var restartButtonY = 281;

    //Generate Random Number for the background
    var BackgroundNumber = Math.random();
    
    //If the local file "LanguageFile" is set to English
    if (localStorage.getItem("LanguageFile") == "English") {
        Language = "English";
    }
    //Else if the local file "LanguageFile" is set to French
    else if (localStorage.getItem("LanguageFile") == "French") {
        Language = "French";
    }
    //Else if the local file "LanguageFile" is set to German
    else if (localStorage.getItem("LanguageFile") == "German") {
        Language = "German";
    }
    //(Default)
    else {
        Language = "English";
        //Set LanguageFile to the current Language (In this case, English)
        localStorage.setItem("LanguageFile", Language);
    }

    //If the local file "SoundFile" is set to trued
    if (localStorage.getItem("SoundFile") == "true") {
        HasSound = true;
    }
        //Else if the local file "SoundFile" is set to false
    else if (localStorage.getItem("SoundFile") == "false") {
        HasSound = false;
    }
    //(Default)
    else {
        HasSound = true;
        localStorage.setItem("SoundFile", HasSound);
    }

    //If the local file "ParallaxFile" is set to true
    if (localStorage.getItem("ParallaxFile") == "true") {
        IsParallax = true;
    }
        //Else if the local file "ParallaxFile is set to false
    else if (localStorage.getItem("ParallaxFile") == "false") {
        IsParallax = false;
    }
    //(Default)
    else {
        IsParallax = true
        localStorage.setItem("ParallaxFile", IsParallax);
    }
    
    
    var menu = function (game) { }
    menu.prototype =
    {
        //Preload function (Called once)
        preload: function () {
            if (LevelType == "Hilly" || LevelType == "City Day") {
                game.load.image('enPlayButton', "images/Language/English/English Play.png");
                game.load.image('enOptionsButton', "images/Language/English/English Options.png");
                game.load.image('frPlayButton', "images/Language/French/French Play.png");
                game.load.image('frOptionsButton', "images/Language/French/French Options.png");
                game.load.image('gerPlayButton', "images/Language/German/German Play.png");
                game.load.image('gerOptionsButton', "images/Language/German/German Options.png");
            }
            else {
                game.load.image('enPlayButton', "images/Language/English/English Play Night.png");
                game.load.image('enOptionsButton', "images/Language/English/English Options Night.png");
                game.load.image('frPlayButton', "images/Language/French/French Play Night.png");
                game.load.image('frOptionsButton', "images/Language/French/French Options Night.png");
                game.load.image('gerPlayButton', "images/Language/German/German Play Night.png");
                game.load.image('gerOptionsButton', "images/Language/German/German Options Night.png");
            }

            game.load.image('hillyPlatform', "images/Hilly/platform.png");
            game.load.image('hillyBackgroundSKY', "images/Hilly/Sky.png");
            game.load.image('hillyBackgroundBackHills', "images/Hilly/Back Hills.png");
            game.load.image('hillyBackgroundFrontHills', "images/Hilly/Front Hills.png");
            game.load.image('hillyBackgroundFence', "images/Hilly/fenceground.png");
            game.load.image('hillyBackgroundClouds', "images/Hilly/Clouds.png");
            game.load.image('cityDayBackgroundBuildings', "images/City Day/city-bg.png");
            game.load.image('cityDayBackgroundRoad', "images/City Day/road.png");
            game.load.image('cityDayBackgroundSky', "images/City Day/sky.png");
            game.load.image('cityDayPlatformMedium', "images/City Day/platform.png");
            game.load.image('cityDayPlatformSmall', "images/City Day/platform small.png");
            game.load.image('cityNightBackgroundBuildings', "images/City Night/city.png");
            game.load.image('cityNightBackgroundRoad', "images/City Night/road.png");
            game.load.image('cityNightBackgroundSky', "images/City Night/sky.png");
            
            game.load.image('DigitalBullStudiosButton', "images/DigitalBullStudios.png");
        },
        //Create function (Called once)
        create: function () {
            //Scale to screen size
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignVertically = true;

            createBackgrounds();
            
            if (Language == "English") {
                enPlayButton = game.add.button(enPlayButtonX, enPlayButtonY, 'enPlayButton', PlayFunction, this);
                enOptionsButton = game.add.button(enOptionsButtonX, enOptionsButtonY, 'enOptionsButton', OptionsFunction, this);
            }
            else if (Language == "French") {
                frPlayButton = game.add.button(frPlayButtonX, frPlayButtonY, 'frPlayButton', PlayFunction, this);
                frOptionsButton = game.add.button(frOptionsButtonX, frOptionsButtonY, 'frOptionsButton', OptionsFunction, this);
            }
            else {
                gerPlayButton = game.add.button(gerPlayButtonX, gerPlayButtonY, 'gerPlayButton', PlayFunction, this);
                gerOptionsButton = game.add.button(gerOptionsButtonX, gerOptionsButtonY, 'gerOptionsButton', OptionsFunction, this);
            }
            DigitalBullStudiosButton = game.add.button(DigitalBullStudiosButtonX, DigitalBullStudiosButtonY, 'DigitalBullStudiosButton', DigitalBullStudiosFunction, this);
            DigitalBullStudiosButton.inputEnabled = true;
        },
        //Update function (Updates 60 times a second)
        update: function () {
            backgroundUpdate();
            if (Language == "English") {
                enPlayButton.destroy();
                enOptionsButton.destroy();
                enPlayButton = game.add.button(enPlayButtonX, enPlayButtonY, 'enPlayButton', PlayFunction, this);
                enPlayButton.onInputDown.add(PlayFunction, this);
                enOptionsButton = game.add.button(enOptionsButtonX, enOptionsButtonY, 'enOptionsButton', OptionsFunction, this);
                enOptionsButton.onInputDown.add(OptionsFunction, this);
            }
            else if (Language == "French") {
                frPlayButton.destroy();
                frOptionsButton.destroy();
                frPlayButton = game.add.button(frPlayButtonY, frPlayButtonY, 'frPlayButton', PlayFunction, this);
                frPlayButton.onInputDown.add(PlayFunction, this);
                frOptionsButton = game.add.button(frOptionsButtonX, frOptionsButtonY, 'frOptionsButton', OptionsFunction, this);
                frOptionsButton.onInputDown.add(OptionsFunction, this);
            }
            else {
                gerPlayButton.destroy();
                gerOptionsButton.destroy();
                gerPlayButton = game.add.button(gerPlayButtonY, gerPlayButtonY, 'gerPlayButton', PlayFunction, this);
                gerPlayButton.onInputDown.add(PlayFunction, this);
                gerOptionsButton = game.add.button(gerOptionsButtonX, gerOptionsButtonY, 'gerOptionsButton', OptionsFunction, this);
                gerOptionsButton.onInputDown.add(OptionsFunction, this);
            }
            DigitalBullStudiosButton.destroy();
            DigitalBullStudiosButton = game.add.button(DigitalBullStudiosButtonX, DigitalBullStudiosButtonY, 'DigitalBullStudiosButton', DigitalBullStudiosFunction, this);
            DigitalBullStudiosButton.onInputDown.add(DigitalBullStudiosFunction, this);
        }
    }
    var options = function (game) { }
    options.prototype =
    {
        //Preload function (Called once)
        preload: function () {
            if (LevelType == "Hilly" || LevelType == "City Day")
            {
                game.load.image('enSoundOnButton', "images/Language/English/English Sound On.png");
                game.load.image('enSoundOffButton', "images/Language/English/English Sound Off.png");
                game.load.image('enParallaxOnButton', "images/Language/English/English Parallax On.png");
                game.load.image('enParallaxOffButton', "images/Language/English/English Parallax Off.png");
                game.load.image('enLanguageButton', "images/Language/English/Language- English.png");
                game.load.image('enResetScoreButton', "images/Language/English/English Reset Score.png");
                game.load.image('enBackButton', "images/Language/English/English Back.png");
                game.load.image('frSoundOnButton', "images/Language/French/French Sound On.png");
                game.load.image('frSoundOffButton', "images/Language/French/French Sound Off.png");
                game.load.image('frParallaxOnButton', "images/Language/French/French Parallax On.png");
                game.load.image('frParallaxOffButton', "images/Language/French/French Parallax Off.png");
                game.load.image('frLanguageButton', "images/Language/French/French Language French.png");
                game.load.image('frResetScoreButton', "images/Language/French/French Reset Score.png");
                game.load.image('frBackButton', "images/Language/French/French Back.png");
                game.load.image('gerSoundOnButton', "images/Language/German/German Sound On.png");
                game.load.image('gerSoundOffButton', "images/Language/German/German Sound Off.png");
                game.load.image('gerParallaxOnButton', "images/Language/German/German Parallax On.png");
                game.load.image('gerParallaxOffButton', "images/Language/German/German Parallax Off.png");
                game.load.image('gerLanguageButton', "images/Language/German/German Langauage German.png");
                game.load.image('gerResetScoreButton', "images/Language/German/German Reset Score.png");
                game.load.image('gerBackButton', "images/Language/German/German Back.png");
            }
            else
            {
                game.load.image('enSoundOnButton', "images/Language/English/English Sound On Night.png");
                game.load.image('enSoundOffButton', "images/Language/English/English Sound Off Night.png");
                game.load.image('enParallaxOnButton', "images/Language/English/English Parallax On Night.png");
                game.load.image('enParallaxOffButton', "images/Language/English/English Parallax Off Night.png");
                game.load.image('enLanguageButton', "images/Language/English/Language- English Night.png");
                game.load.image('enResetScoreButton', "images/Language/English/English Reset Score Night.png");
                game.load.image('enBackButton', "images/Language/English/English Back Night.png");
                game.load.image('frSoundOnButton', "images/Language/French/French Sound On.png");
                game.load.image('frSoundOffButton', "images/Language/French/French Sound Off.png");
                game.load.image('frParallaxOnButton', "images/Language/French/French Parallax On.png");
                game.load.image('frParallaxOffButton', "images/Language/French/French Parallax Off.png");
                game.load.image('frLanguageButton', "images/Language/French/French Language French.png");
                game.load.image('frResetScoreButton', "images/Language/French/French Reset Score.png");
                game.load.image('frBackButton', "images/Language/French/French Back.png");
                game.load.image('gerSoundOnButton', "images/Language/German/German Sound On.png");
                game.load.image('gerSoundOffButton', "images/Language/German/German Sound Off.png");
                game.load.image('gerParallaxOnButton', "images/Language/German/German Parallax On.png");
                game.load.image('gerParallaxOffButton', "images/Language/German/German Parallax Off.png");
                game.load.image('gerLanguageButton', "images/Language/German/German Langauage German.png");
                game.load.image('gerResetScoreButton', "images/Language/German/German Reset Score.png");
                game.load.image('gerBackButton', "images/Language/German/German Back.png");
            }
            game.load.image('hillyBackgroundSKY', "images/Hilly/Sky.png");
            game.load.image('hillyBackgroundBackHills', "images/Hilly/Back Hills.png");
            game.load.image('hillyBackgroundFrontHills', "images/Hilly/Front Hills.png");
            game.load.image('hillyBackgroundFence', "images/Hilly/fenceground.png");
            game.load.image('hillyBackgroundClouds', "images/Hilly/Clouds.png");
            game.load.image('cityDayBackgroundBuildings', "images/City Day/city-bg.png");
            game.load.image('cityDayBackgroundRoad', "images/City Day/road.png");
            game.load.image('cityDayBackgroundSky', "images/City Day/sky.png");
            game.load.image('cityNightBackgroundBuildings', "images/City Night/city.png");
            game.load.image('cityNightBackgroundRoad', "images/City Night/road.png");
            game.load.image('cityNightBackgroundSky', "images/City Night/sky.png");
        },
        //Create function (Called once)
        create: function () {
            //Scale to screen size
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            createBackgrounds();

            enSoundOnButton = game.add.button(enSoundOnButtonX, enSoundOnButtonY, 'enSoundOnButton', SoundFunction, this);
            enSoundOffButton = game.add.button(enSoundOffButtonX, enSoundOffButtonY, 'enSoundOffButton', SoundFunction, this);
            enParallaxOnButton = game.add.button(enParallaxOnButtonX, enParallaxOnButtonY, 'enParallaxOnButton', ParallaxFunction, this);
            enParallaxOffButton = game.add.button(enParallaxOffButtonX, enParallaxOffButtonY, 'enParallaxOffButton', ParallaxFunction, this);
            enLanguageButton = game.add.button(enLanguageButtonX, enLanguageButtonY, 'enLanguageButton', LanguageFunction, this);
            enResetScoreButton = game.add.button(enResetScoreButtonX, enResetScoreButtonY, 'enResetScoreButton', ResetScoreFunction, this);
            enBackButton = game.add.button(enBackButtonX, enBackButtonY, 'enBackButton', BackFunction, this);
            frSoundOnButton = game.add.button(frSoundOnButtonX, frSoundOnButtonY, 'frSoundOnButton', SoundFunction, this);
            frSoundOffButton = game.add.button(frSoundOffButtonX, frSoundOffButtonY, 'frSoundOffButton', SoundFunction, this);
            frParallaxOnButton = game.add.button(frParallaxOnButtonX, frParallaxOnButtonY, 'frParallaxOnButton', ParallaxFunction, this);
            frParallaxOffButton = game.add.button(frParallaxOffButtonX, frParallaxOffButtonY, 'frParallaxOffButton', ParallaxFunction, this);
            frLanguageButton = game.add.button(frLanguageButtonX, frLanguageButtonY, 'frLanguageButton', LanguageFunction, this);
            frResetScoreButton = game.add.button(frResetScoreButtonX, frResetScoreButtonY, 'frResetScoreButton', ResetScoreFunction, this);
            frBackButton = game.add.button(frBackButtonX, frBackButtonY, 'frBackButton', BackFunction, this);
            gerSoundOnButton = game.add.button(gerSoundOnButtonX, gerSoundOnButtonY, 'gerSoundOnButton', SoundFunction, this);
            gerSoundOffButton = game.add.button(gerSoundOffButtonX, gerSoundOffButtonY, 'gerSoundOffButton', SoundFunction, this);
            gerParallaxOnButton = game.add.button(gerParallaxOnButtonX, gerParallaxOnButtonY, 'gerParallaxOnButton', ParallaxFunction, this);
            gerParallaxOffButton = game.add.button(gerParallaxOffButtonX, gerParallaxOffButtonY, 'gerParallaxOffButton', ParallaxFunction, this);
            gerLanguageButton = game.add.button(enLanguageButtonX, gerLanguageButtonY, 'gerLanguageButton', LanguageFunction, this);
            gerResetScoreButton = game.add.button(gerResetScoreButtonX, gerResetScoreButtonY, 'gerResetScoreButton', ResetScoreFunction, this);
            gerBackButton = game.add.button(gerBackButtonX, gerBackButtonY, 'gerBackButton', BackFunction, this);
        },
        //Update function (Called 60 times a second)
        update: function () {
            backgroundUpdate();

            enSoundOnButton.destroy();
            enSoundOffButton.destroy();
            enParallaxOnButton.destroy();
            enParallaxOffButton.destroy();
            enLanguageButton.destroy();
            enResetScoreButton.destroy();
            enBackButton.destroy();
            frSoundOnButton.destroy();
            frSoundOffButton.destroy();
            frParallaxOnButton.destroy();
            frParallaxOffButton.destroy();
            frLanguageButton.destroy();
            frResetScoreButton.destroy();
            frBackButton.destroy();
            gerSoundOnButton.destroy();
            gerSoundOffButton.destroy();
            gerParallaxOnButton.destroy();
            gerParallaxOffButton.destroy();
            gerLanguageButton.destroy();
            gerBackButton.destroy();
            gerResetScoreButton.destroy();

            if (Language == "English") {
                if (HasSound == true) {
                    enSoundOnButton = game.add.button(enSoundOnButtonX, enSoundOnButtonY, 'enSoundOnButton', SoundFunction, this);
                    enSoundOnButton.onInputDown.add(SoundFunction, this);
                }
                else {
                    enSoundOffButton = game.add.button(enSoundOffButtonX, enSoundOffButtonY, 'enSoundOffButton', SoundFunction, this);
                    enSoundOffButton.onInputDown.add(SoundFunction, this);
                }

                if (IsParallax == true) {
                    enParallaxOnButton = game.add.button(enParallaxOnButtonX, enParallaxOnButtonY, 'enParallaxOnButton', ParallaxFunction, this);
                    enParallaxOnButton.onInputDown.add(ParallaxFunction, this);
                }
                else {
                    enParallaxOffButton = game.add.button(enParallaxOffButtonX, enParallaxOffButtonY, 'enParallaxOffButton', ParallaxFunction, this);
                    enParallaxOffButton.onInputDown.add(ParallaxFunction, this);
                }

                enResetScoreButton = game.add.button(enResetScoreButtonX, enResetScoreButtonY, 'enResetScoreButton', ResetScoreFunction, this);
                enResetScoreButton.onInputDown.add(ResetScoreFunction, this);
                enLanguageButton = game.add.button(enLanguageButtonX, enLanguageButtonY, 'enLanguageButton', LanguageFunction, this);
                enLanguageButton.onInputDown.add(LanguageFunction, this);
                enBackButton = game.add.button(enBackButtonX, enBackButtonY, 'enBackButton', BackFunction, this);
                enBackButton.onInputDown.add(BackFunction, this);
            }
            else if (Language == "French") {
                if (HasSound == true) {
                    frSoundOnButton = game.add.button(frSoundOnButtonX, frSoundOnButtonY, 'frSoundOnButton', SoundFunction, this);
                    frSoundOnButton.onInputDown.add(SoundFunction, this);
                }
                else {
                    frSoundOffButton = game.add.button(frSoundOffButtonX, frSoundOffButtonY, 'frSoundOffButton', SoundFunction, this);
                    frSoundOffButton.onInputDown.add(SoundFunction, this);
                }
                
                if (IsParallax == true) {
                    frParallaxOnButton = game.add.button(frParallaxOnButtonX, frParallaxOnButtonY, 'frParallaxOnButton', ParallaxFunction, this);
                    frParallaxOnButton.onInputDown.add(ParallaxFunction, this);
                }
                else {
                    frParallaxOffButton = game.add.button(frParallaxOffButtonX, frParallaxOffButtonY, 'frParallaxOffButton', ParallaxFunction, this);
                    frParallaxOffButton.onInputDown.add(ParallaxFunction, this);
                }
                frLanguageButton = game.add.button(frLanguageButtonX, frLanguageButtonY, 'frLanguageButton', LanguageFunction, this);
                frLanguageButton.onInputDown.add(LanguageFunction, this);
                frResetScoreButton = game.add.button(frResetScoreButtonX, frResetScoreButtonY, 'frResetScoreButton', ResetScoreFunction, this);
                frResetScoreButton.onInputDown.add(ResetScoreFunction, this);
                frBackButton = game.add.button(frBackButtonX, frBackButtonY, 'frBackButton', BackFunction, this);
                frBackButton.onInputDown.add(BackFunction, this);
            }
            else {
                if (HasSound == true) {
                    gerSoundOnButton = game.add.button(gerSoundOnButtonX, gerSoundOnButtonY, 'gerSoundOnButton', SoundFunction, this);
                    gerSoundOnButton.onInputDown.add(SoundFunction, this);
                }
                else {
                    gerSoundOffButton = game.add.button(gerSoundOffButtonX, gerSoundOffButtonY, 'gerSoundOffButton', SoundFunction, this);
                    gerSoundOffButton.onInputDown.add(SoundFunction, this);
                }

                if (IsParallax == true) {
                    gerParallaxOnButton = game.add.button(gerParallaxOnButtonX, gerParallaxOnButtonY, 'gerParallaxOnButton', ParallaxFunction, this);
                    gerParallaxOnButton.onInputDown.add(ParallaxFunction, this);
                }
                else {
                    gerParallaxOffButton = game.add.button(gerParallaxOffButtonX, gerParallaxOffButtonY, 'gerParallaxOffButton', ParallaxFunction, this);
                    gerParallaxOffButton.onInputDown.add(ParallaxFunction, this);
                }

                gerLanguageButton = game.add.button(enLanguageButtonX, gerLanguageButtonY, 'gerLanguageButton', LanguageFunction, this);
                gerLanguageButton.onInputDown.add(LanguageFunction, this);
                gerResetScoreButton = game.add.button(gerResetScoreButtonX, gerResetScoreButtonY, 'gerResetScoreButton', ResetScoreFunction, this);
                gerResetScoreButton.onInputDown.add(ResetScoreFunction, this);
                gerBackButton = game.add.button(gerBackButtonX, gerBackButtonY, 'gerBackButton', BackFunction, this);
                gerBackButton.onInputDown.add(BackFunction, this);
            }
        }
    }

    var ays = function (game) { }
    ays.prototype = {
        //Preload function (Called once)
        preload: function () {
            game.load.image('hillyBackgroundSKY', "images/Hilly/Sky.png");
            game.load.image('hillyBackgroundBackHills', "images/Hilly/Back Hills.png");
            game.load.image('hillyBackgroundFrontHills', "images/Hilly/Front Hills.png");
            game.load.image('hillyBackgroundFence', "images/Hilly/fenceground.png");
            game.load.image('hillyBackgroundClouds', "images/Hilly/Clouds.png");
            game.load.image('cityDayBackgroundBuildings', "images/City Day/city-bg.png");
            game.load.image('cityDayBackgroundRoad', "images/City Day/road.png");
            game.load.image('cityDayBackgroundSky', "images/City Day/sky.png");
            game.load.image('cityNightBackgroundBuildings', "images/City Night/city.png");
            game.load.image('cityNightBackgroundRoad', "images/City Night/road.png");
            game.load.image('cityNightBackgroundSky', "images/City Night/sky.png");
            
            if (LevelType == "Hilly" || LevelType == "City Day")
            {
                game.load.image('enAYS', "images/Language/English/English AYS.png");
                game.load.image('enYes', "images/Language/English/English Yes.png");
                game.load.image('enNo', "images/Language/English/English No.png");
                game.load.image('frAYS', "images/Language/French/French AYS.png");
                game.load.image('frYes', "images/Language/French/French Yes.png");
                game.load.image('frNo', "images/Language/French/French No.png");
                game.load.image('gerAYS', "images/Language/German/German AYS.png");
                game.load.image('gerYes', "images/Language/German/German Yes.png");
                game.load.image('gerNo', "images/Language/German/German No.png");
            }
            else
            {
                game.load.image('enAYS', "images/Language/English/English AYS.png");
                game.load.image('enYes', "images/Language/English/English Yes Night.png");
                game.load.image('enNo', "images/Language/English/English No Night.png");
                game.load.image('frAYS', "images/Language/French/French AYS.png");
                game.load.image('frYes', "images/Language/French/French Yes.png");
                game.load.image('frNo', "images/Language/French/French No.png");
                game.load.image('gerAYS', "images/Language/German/German AYS.png");
                game.load.image('gerYes', "images/Language/German/German Yes.png");
                game.load.image('gerNo', "images/Language/German/German No.png");
            }
        },

        //Create function (Called once)
        create: function () {
            //Scale to screen size
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            createBackgrounds();

            if (Language == "English") {
                enAYS = game.add.sprite(enAYSX, enAYSY, 'enAYS');
                enYes = game.add.button(enYesX, enYesY, 'enYes', YesFunction, this);
                enNo = game.add.button(enNoX, enNoY, 'enNo', NoFunction, this);
            }
            else if (Language == "French") {
                frAYS = game.add.sprite(frAYSX, frAYSY, 'frAYS');
                frYes = game.add.button(frYesX, frYesY, 'frYes', YesFunction, this);
                frNo = game.add.button(frNoX, frNoY, 'frNo', NoFunction, this);
            }
            else {
                gerAYS = game.add.sprite(gerAYSX, gerAYSY, 'gerAYS');
                gerYes = game.add.button(gerYesX, gerYesY, 'gerYes', YesFunction, this);
                gerNo = game.add.button(gerNoX, gerNoY, 'gerNo', NoFunction, this);
            }
        },

        //Update function (Called 60 times a seconds)
        update: function () {
            backgroundUpdate();
            
            if (Language == "English")
            {
                enAYS.destroy();
                enYes.destroy();
                enNo.destroy();

                enAYS = game.add.sprite(enAYSX, enAYSY, 'enAYS');
                enYes = game.add.button(enYesX, enYesY, 'enYes', YesFunction, this);
                enYes.onInputDown.add(YesFunction, this);
                enNo = game.add.button(enNoX, enNoY, 'enNo', NoFunction, this);
                enNo.onInputDown.add(NoFunction, this);
            }
            else if (Language == "French")
            {
                frAYS.destroy();
                frYes.destroy();
                frNo.destroy();

                frAYS = game.add.sprite(frAYSX, frAYSY, 'frAYS');
                frYes = game.add.button(frYesX, frYesY, 'frYes', YesFunction, this);
                frYes.onInputDown.add(YesFunction, this);
                frNo = game.add.button(frNoX, frNoY, 'frNo', NoFunction, this);
                frNo.onInputDown.add(NoFunction, this);
            }
            else
            {
                gerAYS.destroy();
                gerYes.destroy();
                gerNo.destroy();
                
                gerAYS = game.add.sprite(gerAYSX, gerAYSY, 'gerAYS');
                gerYes = game.add.button(gerYesX, gerYesY, 'gerYes', YesFunction, this);
                gerYes.onInputDown.add(YesFunction, this);
                gerNo = game.add.button(gerNoX, gerNoY, 'gerNo', NoFunction, this);
                gerNo.onInputDown.add(NoFunction, this);
            }
        }
    }

    var play = function (game) { }
    play.prototype = {
        //Preload function (Called once)
        preload: function () {
            BackgroundNumber = Math.random();

            if (BackgroundNumber <=0.3) {
                LevelType = "Hilly";
            }
            else if (BackgroundNumber >0.3 && BackgroundNumber <=0.6) {
                LevelType = "City Day";
            }
            else if (BackgroundNumber >0.6 && BackgroundNumber <=0.9) {
                LevelType = "City Night";
            }

            game.load.image("player", "images/player.png");
            game.load.image("player jump", "images/player jump.png");

            if (LevelType == "Hilly") {
                game.load.image("hillyPlatform", "images/Hilly/platform.png");
            }
            else if (LevelType == "City Day") {
                game.load.image("cityDayPlatformSmall", "images/City Day/platform small.png");
                game.load.image("cityDayPlatformMedium", "images/City Day/platform.png");
            }
            else {
                game.load.image("cityNightPlatformMedium", "images/City Night/platform.png");
            }

            game.load.image("StrengthBar", "images/Strength Bar.png");

            game.load.image('hillyBackgroundSKY', "images/Hilly/Sky.png");
            game.load.image('hillyBackgroundBackHills', "images/Hilly/Back Hills.png");
            game.load.image('hillyBackgroundFrontHills', "images/Hilly/Front Hills.png");
            game.load.image('hillyBackgroundFence', "images/Hilly/fenceground.png");
            game.load.image('hillyBackgroundClouds', "images/Hilly/Clouds.png");
            game.load.image('cityDayBackgroundBuildings', "images/City Day/city-bg.png");
            game.load.image('cityDayBackgroundRoad', "images/City Day/road.png");
            game.load.image('cityDayBackgroundSky', "images/City Day/sky.png");
            game.load.image('cityNightBackgroundBuildings', "images/City Night/city.png");
            game.load.image('cityNightBackgroundRoad', "images/City Night/road.png");
            game.load.image('cityNightBackgroundSky', "images/City Night/sky.png");
        },
        //Create function (Called once)
        create: function () {
            //Scale to screen size
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            createPlayBackgrounds();

            IsJumping = false;
            IsFalling = false;
            score = 0;
            NumberOfPlatforms = 0;
            jumps = 0;
            Platforms = game.add.group();
            bestScore = localStorage.getItem("TopScoreFile") == null ? 0 : localStorage.getItem("TopScoreFile");
            if (LevelType == "Hilly" || LevelType == "City Day")
            {
                scoreText = game.add.text(10, 10, "-", {font: "bold 26px Arial"});
            }
            else
            {
                scoreText = game.add.text(10, 10, "-", {font: "bold 26px Arial", fill: "#ffffff"});
            }
            
            scoreUpdate();
            game.physics.startSystem(Phaser.Physics.ARCADE);
            player = game.add.sprite(80, 0, "player");
            player.anchor.set(0.5);
            player.lastPlatform = 1;
            game.physics.arcade.enable(player);
            player.body.gravity.y = Gravity;
            addPlatform(80);
            createPlayForegrounds();
        },
        //Update function (Called 60 times a second)
        update: function () {
            game.physics.arcade.collide(player, Platforms, LandCheck);

            if (IsFalling == true || IsJumping == true)
            {
                backgroundUpdate();
            }
            
            //change the player sprite to jumping or standing
            if (IsJumping == true)
            {
                
                player.loadTexture('player jump');
            }
            else if(IsFalling == true)
            {
                player.loadTexture('player jump');
            }
            else
            {
                player.loadTexture('player');
            }
            
            if (player.x < 0) {
                Kill();
            }

            if (player.y > game.height) {
                Kill();
            }
            
            //Brings platforms and player to front so that the backgrounds don't show first
            game.world.bringToTop(Platforms);
            player.bringToTop();
            scoreText.bringToTop();
        }
    }

    var gameover = function (game) { }
    gameover.prototype =
    {
    preload:function()
        {
            game.load.image("homeButton", 'images/Home Button.png');
            game.load.image("restartButton", 'images/Restart Button.png');
        },
    create:function()
        {
            createBackgrounds();
            gameOverText();
            
            homeButton = game.add.button(homeButtonX, homeButtonY, 'homeButton', HomeFunction, this);
            restartButton = game.add.button(restartButtonX, restartButtonY, 'restartButton', RestartFunction, this);
        },
        
    update:function()
        {
            backgroundUpdate();
            
            scoreText.destroy();
            bestScoreText.destroy();
            
            gameOverText();
            
            if (Language == "English")
            {
                scoreText.text = "Score: " + score; 
                bestScoreText.text = "Best Score: " + Math.max(score, bestScore);
            }
            else if (Language == "French")
            {
                scoreText.text = "Marquer des points: " + score;
                bestScoreText.text = "Meilleur Marquer des points: " + Math.max(score, bestScore);
            }
            else
            {
                scoreText.text = "Punktestand: " + score;
                bestScoreText.text = "Hochster Punktestand: " + Math.max(score, bestScore);
            }
            
            homeButton.destroy();
            restartButton.destroy();
            
            homeButton = game.add.button(homeButtonX, homeButtonY, 'homeButton', HomeFunction, this);
            homeButton.onInputDown.add(HomeFunction, this);
            
            restartButton = game.add.button(restartButtonX, restartButtonY, 'restartButton', RestartFunction, this);
            restartButton.onInputDown.add(RestartFunction, this);
        }
    }
    
    function gameOverText(){
        if (Language == "English" && LevelType == "Hilly" || Language == "English" && LevelType == "City Day")
        {
            scoreText = game.add.text(game.width / 2 - 65, 201,"-",{
                                      font:"bold 26px Arial"
                                      });
            bestScoreText = game.add.text(game.width / 2 - 100, 231,"-",{
                                          font:"bold 26px Arial" });
        }
        else if (Language == "French" && LevelType == "Hilly" || Language == "French" && LevelType == "City Day")
        {
            scoreText = game.add.text(game.width / 2 - 135, 201,"-",{
                                      font:"bold 26px Arial"
                                      });
            bestScoreText = game.add.text(game.width / 2 - 195, 231,"-",{
                                          font:"bold 26px Arial" });
        }
        else if (Language == "German" && LevelType == "Hilly" || Language == "German" && LevelType == "City Day")
        {
            scoreText = game.add.text(game.width / 2 - 105, 201,"-",{
                                      font:"bold 26px Arial"
                                      });
            bestScoreText = game.add.text(game.width / 2 - 165, 231,"-",{
                                          font:"bold 26px Arial" });
        }
        else if (Language == "English" && LevelType == "City Night")
        {
            scoreText = game.add.text(game.width / 2 - 65, 201,"-",{
                                      font:"bold 26px Arial", fill :"#ffffff"
                                      });
            bestScoreText = game.add.text(game.width / 2 - 100, 231,"-",{
                                          font:"bold 26px Arial", fill :"#ffffff" });
        }
        else if (Language == "French" && LevelType == "City Night")
        {
            scoreText = game.add.text(game.width / 2 - 135, 201,"-",{
                                      font:"bold 26px Arial", fill :"#ffffff"
                                      });
            bestScoreText = game.add.text(game.width / 2 - 195, 231,"-",{
                                          font:"bold 26px Arial", fill :"#ffffff" });
        }
        else if (Language == "German" && LevelType == "City Night")
        {
            scoreText = game.add.text(game.width / 2 - 105, 201,"-",{
                                      font:"bold 26px Arial", fill :"#ffffff"
                                      });
            bestScoreText = game.add.text(game.width / 2 - 165, 231,"-",{
                                          font:"bold 26px Arial", fill :"#ffffff" });
        }
    }
    
    function createBackgrounds(){
        if (LevelType == "Hilly")
        {
            hillyBackgroundSky1 = game.add.sprite(hillyBackgroundSky1Xpos, hillyBackgroundSky1Ypos, 'hillyBackgroundSKY');
            hillyBackgroundSky2 = game.add.sprite(hillyBackgroundSky2Xpos, hillyBackgroundSky2Ypos, 'hillyBackgroundSKY');
            hillyBackgroundBackHills1 = game.add.sprite(hillyBackgroundBackHills1Xpos, hillyBackgroundBackHills1Ypos, 'hillyBackgroundBackHills');
            hillyBackgroundBackHills2 = game.add.sprite(hillyBackgroundBackHills2Xpos, hillyBackgroundBackHills2Ypos, 'hillyBackgroundBackHills');
            hillyBackgroundFrontHills1 = game.add.sprite(hillyBackgroundFrontHills1Xpos, hillyBackgroundFrontHills1Ypos, 'hillyBackgroundFrontHills');
            hillyBackgroundFrontHills2 = game.add.sprite(hillyBackgroundFrontHills2Xpos, hillyBackgroundFrontHills2Ypos, 'hillyBackgroundFrontHills');
            hillyBackgroundFence1 = game.add.sprite(hillyBackgroundFence1Xpos, hillyBackgroundFence1Ypos, 'hillyBackgroundFence');
            hillyBackgroundFence2 = game.add.sprite(hillyBackgroundFence2Xpos, hillyBackgroundFence2Ypos, 'hillyBackgroundFence');
            hillyBackgroundClouds1 = game.add.sprite(hillyBackgroundClouds1Xpos, hillyBackgroundClouds1Ypos, 'hillyBackgroundClouds');
            hillyBackgroundClouds2 = game.add.sprite(hillyBackgroundClouds2Xpos, hillyBackgroundClouds2Ypos, 'hillyBackgroundClouds');
        }
        else if (LevelType == "City Day")
        {
            cityDayBackgroundSky1 = game.add.sprite(cityDayBackgroundSky1Xpos, cityDayBackgroundSky1Ypos, 'cityDayBackgroundSky');
            cityDayBackgroundSky2 = game.add.sprite(cityDayBackgroundSky2Xpos, cityDayBackgroundSky2Ypos, 'cityDayBackgroundSky');
            cityDayBackgroundBuildings1 = game.add.sprite(cityDayBackgroundBuildings1Xpos, cityDayBackgroundBuildings1Ypos, 'cityDayBackgroundBuildings');
            cityDayBackgroundBuildings2 = game.add.sprite(cityDayBackgroundBuildings2Xpos, cityDayBackgroundBuildings2Ypos, 'cityDayBackgroundBuildings');
            cityDayBackgroundRoad1 = game.add.sprite(cityDayBackgroundRoad1Xpos, cityDayBackgroundRoad1Ypos, 'cityDayBackgroundRoad');
            cityDayBackgroundRoad2 = game.add.sprite(cityDayBackgroundRoad2Xpos, cityDayBackgroundRoad2Ypos, 'cityDayBackgroundRoad');
        }
        else
        {
            cityNightBackgroundSky1 = game.add.sprite(cityNightBackgroundSky1Xpos, cityNightBackgroundSky1Ypos, 'cityNightBackgroundSky');
            cityNightBackgroundSky2 = game.add.sprite(cityNightBackgroundSky2Xpos, cityNightBackgroundSky2Ypos, 'cityNightBackgroundSky');
            cityNightBackgroundBuildings1 = game.add.sprite(cityNightBackgroundBuildings1Xpos, cityNightBackgroundBuildings1Ypos, 'cityNightBackgroundBuildings');
            cityNightBackgroundBuildings2 = game.add.sprite(cityNightBackgroundBuildings2Xpos, cityNightBackgroundBuildings2Ypos, 'cityNightBackgroundBuildings');
            cityNightBackgroundRoad1 = game.add.sprite(cityNightBackgroundRoad1Xpos, cityNightBackgroundRoad1Ypos, 'cityNightBackgroundRoad');
            cityNightBackgroundRoad2 = game.add.sprite(cityNightBackgroundRoad2Xpos, cityNightBackgroundRoad2Ypos, 'cityNightBackgroundRoad');
        }
    }
    
    function createPlayBackgrounds(){
        if (LevelType == "Hilly")
        {
            hillyBackgroundSky1 = game.add.sprite(hillyBackgroundSky1Xpos, hillyBackgroundSky1Ypos, 'hillyBackgroundSKY');
            hillyBackgroundSky2 = game.add.sprite(hillyBackgroundSky2Xpos, hillyBackgroundSky2Ypos, 'hillyBackgroundSKY');
            hillyBackgroundBackHills1 = game.add.sprite(hillyBackgroundBackHills1Xpos, hillyBackgroundBackHills1Ypos, 'hillyBackgroundBackHills');
            hillyBackgroundBackHills2 = game.add.sprite(hillyBackgroundBackHills2Xpos, hillyBackgroundBackHills2Ypos, 'hillyBackgroundBackHills');
            hillyBackgroundFrontHills1 = game.add.sprite(hillyBackgroundFrontHills1Xpos, hillyBackgroundFrontHills1Ypos, 'hillyBackgroundFrontHills');
            hillyBackgroundFrontHills2 = game.add.sprite(hillyBackgroundFrontHills2Xpos, hillyBackgroundFrontHills2Ypos, 'hillyBackgroundFrontHills');
            hillyBackgroundClouds1 = game.add.sprite(hillyBackgroundClouds1Xpos, hillyBackgroundClouds1Ypos, 'hillyBackgroundClouds');
            hillyBackgroundClouds2 = game.add.sprite(hillyBackgroundClouds2Xpos, hillyBackgroundClouds2Ypos, 'hillyBackgroundClouds');
        }
        else if (LevelType == "City Day")
        {
            cityDayBackgroundSky1 = game.add.sprite(cityDayBackgroundSky1Xpos, cityDayBackgroundSky1Ypos, 'cityDayBackgroundSky');
            cityDayBackgroundSky2 = game.add.sprite(cityDayBackgroundSky2Xpos, cityDayBackgroundSky2Ypos, 'cityDayBackgroundSky');
            cityDayBackgroundBuildings1 = game.add.sprite(cityDayBackgroundBuildings1Xpos, cityDayBackgroundBuildings1Ypos, 'cityDayBackgroundBuildings');
            cityDayBackgroundBuildings2 = game.add.sprite(cityDayBackgroundBuildings2Xpos, cityDayBackgroundBuildings2Ypos, 'cityDayBackgroundBuildings');
        }
        else
        {
            cityNightBackgroundSky1 = game.add.sprite(cityNightBackgroundSky1Xpos, cityNightBackgroundSky1Ypos, 'cityNightBackgroundSky');
            cityNightBackgroundSky2 = game.add.sprite(cityNightBackgroundSky2Xpos, cityNightBackgroundSky2Ypos, 'cityNightBackgroundSky');
            cityNightBackgroundBuildings1 = game.add.sprite(cityNightBackgroundBuildings1Xpos, cityNightBackgroundBuildings1Ypos, 'cityNightBackgroundBuildings');
            cityNightBackgroundBuildings2 = game.add.sprite(cityNightBackgroundBuildings2Xpos, cityNightBackgroundBuildings2Ypos, 'cityNightBackgroundBuildings');
        }
    }
    
    function createPlayForegrounds(){
        if (LevelType == "Hilly")
        {
            hillyBackgroundFence1 = game.add.sprite(hillyBackgroundFence1Xpos, hillyBackgroundFence1Ypos, 'hillyBackgroundFence');
            hillyBackgroundFence2 = game.add.sprite(hillyBackgroundFence2Xpos, hillyBackgroundFence2Ypos, 'hillyBackgroundFence');
        }
        else if (LevelType == "City Day")
        {
            cityDayBackgroundRoad1 = game.add.sprite(cityDayBackgroundRoad1Xpos, cityDayBackgroundRoad1Ypos, 'cityDayBackgroundRoad');
            cityDayBackgroundRoad2 = game.add.sprite(cityDayBackgroundRoad2Xpos, cityDayBackgroundRoad2Ypos, 'cityDayBackgroundRoad');
        }
        else
        {
            cityNightBackgroundRoad1 = game.add.sprite(cityNightBackgroundRoad1Xpos, cityNightBackgroundRoad1Ypos, 'cityNightBackgroundRoad');
            cityNightBackgroundRoad2 = game.add.sprite(cityNightBackgroundRoad2Xpos, cityNightBackgroundRoad2Ypos, 'cityNightBackgroundRoad');
        }
    }
    
    game.state.add("Play", play);
    game.state.add("Menu", menu);
    game.state.add("Options", options);
    game.state.add("AYS", ays);
    game.state.add("Game Over", gameover);

    //Initialise the game by starting the state "Menu"
    game.state.start("Menu");

    function backgroundUpdate() {
        if (LevelType == "Hilly") {
            if (hillyBackgroundSky1Xpos >= 1199) {
                hillyBackgroundSky1Xpos = -1199;
            }
            if (hillyBackgroundSky2Xpos >= 1199) {
                hillyBackgroundSky2Xpos = -1199;
            }

            if (hillyBackgroundBackHills1Xpos >= 1199) {
                hillyBackgroundBackHills1Xpos = -1199;
            }
            if (hillyBackgroundBackHills2Xpos >= 1199) {
                hillyBackgroundBackHills2Xpos = -1199;
            }

            if (hillyBackgroundFrontHills1Xpos >= 1199) {
                hillyBackgroundFrontHills1Xpos = -1199;
            }
            if (hillyBackgroundFrontHills2Xpos >= 1199) {
                hillyBackgroundFrontHills2Xpos = -1199;
            }

            if (hillyBackgroundFence1Xpos >= 1199) {
                hillyBackgroundFence1Xpos = -1199;
            }
            if (hillyBackgroundFence2Xpos >= 1199) {
                hillyBackgroundFence2Xpos = -1199;
            }

            if (hillyBackgroundClouds1Xpos >= 1199) {
                hillyBackgroundClouds1Xpos = -1199;
            }
            if (hillyBackgroundClouds2Xpos >= 1199) {
                hillyBackgroundClouds2Xpos = -1199;
            }
        }
        else if (LevelType == "City Day") {
            if (cityDayBackgroundBuildings1Xpos >= 1199) {
                cityDayBackgroundBuildings1Xpos = -1199;
            }
            if (cityDayBackgroundBuildings2Xpos >= 1199) {
                cityDayBackgroundBuildings2Xpos = -1199;
            }

            if (cityDayBackgroundRoad1Xpos >= 1199) {
                cityDayBackgroundRoad1Xpos = -1199;
            }
            if (cityDayBackgroundRoad2Xpos >= 1199) {
                cityDayBackgroundRoad2Xpos = -1199;
            }

            if (cityDayBackgroundSky1Xpos >= 1199) {
                cityDayBackgroundSky1Xpos = -1199;
            }
            if (cityDayBackgroundSky2Xpos >= 1199) {
                cityDayBackgroundSky2Xpos = -1199;
            }
        }
        else if (LevelType == "City Night") {
            if (cityNightBackgroundBuildings1Xpos >= 1199) {
                cityNightBackgroundBuildings1Xpos = -1199;
            }
            if (cityNightBackgroundBuildings2Xpos >= 1199) {
                cityNightBackgroundBuildings2Xpos = -1199;
            }
            
            if (cityNightBackgroundRoad1Xpos >= 1199) {
                cityNightBackgroundRoad1Xpos = -1199;
            }
            if (cityNightBackgroundRoad2Xpos >= 1199) {
                cityNightBackgroundRoad2Xpos = -1199;
            }
            
            if (cityNightBackgroundSky1Xpos >= 1199) {
                cityNightBackgroundSky1Xpos = -1199;
            }
            if (cityNightBackgroundSky2Xpos >= 1199) {
                cityNightBackgroundSky2Xpos = -1199;
            }
        }
        
        if (LevelType == "Hilly") {
            if (IsParallax == true) {
                hillyBackgroundSky1Xpos = hillyBackgroundSky1Xpos + (gameSpeed / 5);
                hillyBackgroundSky2Xpos = hillyBackgroundSky2Xpos + (gameSpeed / 5);
                hillyBackgroundBackHills1Xpos = hillyBackgroundBackHills1Xpos + (gameSpeed / 4);
                hillyBackgroundBackHills2Xpos = hillyBackgroundBackHills2Xpos + (gameSpeed / 4);
                hillyBackgroundFrontHills1Xpos = hillyBackgroundFrontHills1Xpos + (gameSpeed / 2);
                hillyBackgroundFrontHills2Xpos = hillyBackgroundFrontHills2Xpos + (gameSpeed / 2);
                hillyBackgroundFence1Xpos = hillyBackgroundFence1Xpos + (gameSpeed / 1.2);
                hillyBackgroundFence2Xpos = hillyBackgroundFence2Xpos + (gameSpeed / 1.2);
                hillyBackgroundClouds1Xpos = hillyBackgroundClouds1Xpos + (gameSpeed / 6);
                hillyBackgroundClouds2Xpos = hillyBackgroundClouds2Xpos + (gameSpeed / 6);
            }
            else {
                hillyBackgroundSky1Xpos = hillyBackgroundSky1Xpos + (gameSpeed / 2);
                hillyBackgroundSky2Xpos = hillyBackgroundSky2Xpos + (gameSpeed / 2);
                hillyBackgroundBackHills1Xpos = hillyBackgroundBackHills1Xpos + (gameSpeed / 2);
                hillyBackgroundBackHills2Xpos = hillyBackgroundBackHills2Xpos + (gameSpeed / 2);
                hillyBackgroundFrontHills1Xpos = hillyBackgroundFrontHills1Xpos + (gameSpeed / 2);
                hillyBackgroundFrontHills2Xpos = hillyBackgroundFrontHills2Xpos + (gameSpeed / 2);
                hillyBackgroundFence1Xpos = hillyBackgroundFence1Xpos + (gameSpeed / 2);
                hillyBackgroundFence2Xpos = hillyBackgroundFence2Xpos + (gameSpeed / 2);
                hillyBackgroundClouds1Xpos = hillyBackgroundClouds1Xpos + (gameSpeed / 2);
                hillyBackgroundClouds2Xpos = hillyBackgroundClouds2Xpos + (gameSpeed / 2);
            }
            
            hillyBackgroundSky1.destroy();
            hillyBackgroundSky2.destroy();
            hillyBackgroundBackHills1.destroy();
            hillyBackgroundBackHills2.destroy();
            hillyBackgroundFrontHills1.destroy();
            hillyBackgroundFrontHills2.destroy();
            hillyBackgroundFence1.destroy();
            hillyBackgroundFence2.destroy();
            hillyBackgroundClouds1.destroy();
            hillyBackgroundClouds2.destroy();

            hillyBackgroundSky1 = game.add.sprite(hillyBackgroundSky1Xpos, hillyBackgroundSky1Ypos, 'hillyBackgroundSKY');
            hillyBackgroundSky2 = game.add.sprite(hillyBackgroundSky2Xpos, hillyBackgroundSky2Ypos, 'hillyBackgroundSKY');
            hillyBackgroundBackHills1 = game.add.sprite(hillyBackgroundBackHills1Xpos, hillyBackgroundBackHills1Ypos, 'hillyBackgroundBackHills');
            hillyBackgroundBackHills2 = game.add.sprite(hillyBackgroundBackHills2Xpos, hillyBackgroundBackHills2Ypos, 'hillyBackgroundBackHills');
            hillyBackgroundFrontHills1 = game.add.sprite(hillyBackgroundFrontHills1Xpos, hillyBackgroundFrontHills1Ypos, 'hillyBackgroundFrontHills');
            hillyBackgroundFrontHills2 = game.add.sprite(hillyBackgroundFrontHills2Xpos, hillyBackgroundFrontHills2Ypos, 'hillyBackgroundFrontHills');
            hillyBackgroundFence1 = game.add.sprite(hillyBackgroundFence1Xpos, hillyBackgroundFence1Ypos, 'hillyBackgroundFence');
            hillyBackgroundFence2 = game.add.sprite(hillyBackgroundFence2Xpos, hillyBackgroundFence2Ypos, 'hillyBackgroundFence');
            hillyBackgroundClouds1 = game.add.sprite(hillyBackgroundClouds1Xpos, hillyBackgroundClouds1Ypos, 'hillyBackgroundClouds');
            hillyBackgroundClouds2 = game.add.sprite(hillyBackgroundClouds2Xpos, hillyBackgroundClouds2Ypos, 'hillyBackgroundClouds');
        }
        else if (LevelType == "City Day") {
            if (IsParallax == true) {
                cityDayBackgroundSky1Xpos = cityDayBackgroundSky1Xpos + (gameSpeed / 7);
                cityDayBackgroundSky2Xpos = cityDayBackgroundSky2Xpos + (gameSpeed / 7);
                cityDayBackgroundBuildings1Xpos = cityDayBackgroundBuildings1Xpos + (gameSpeed / 2);
                cityDayBackgroundBuildings2Xpos = cityDayBackgroundBuildings2Xpos + (gameSpeed / 2);
                cityDayBackgroundRoad1Xpos = cityDayBackgroundRoad1Xpos + (gameSpeed / 1.2);
                cityDayBackgroundRoad2Xpos = cityDayBackgroundRoad2Xpos + (gameSpeed / 1.2);
            }
            else {
                cityDayBackgroundSky1Xpos = cityDayBackgroundSky1Xpos + (gameSpeed / 3);
                cityDayBackgroundSky2Xpos = cityDayBackgroundSky2Xpos + (gameSpeed / 3);
                cityDayBackgroundBuildings1Xpos = cityDayBackgroundBuildings1Xpos + (gameSpeed / 3);
                cityDayBackgroundBuildings2Xpos = cityDayBackgroundBuildings2Xpos + (gameSpeed / 3);
                cityDayBackgroundRoad1Xpos = cityDayBackgroundRoad1Xpos + (gameSpeed / 3);
                cityDayBackgroundRoad2Xpos = cityDayBackgroundRoad2Xpos + (gameSpeed / 3);
            }

            cityDayBackgroundSky1.destroy();
            cityDayBackgroundSky2.destroy();
            cityDayBackgroundBuildings1.destroy();
            cityDayBackgroundBuildings2.destroy();
            cityDayBackgroundRoad1.destroy();
            cityDayBackgroundRoad2.destroy();

            cityDayBackgroundSky1 = game.add.sprite(cityDayBackgroundSky1Xpos, cityDayBackgroundSky1Ypos, 'cityDayBackgroundSky');
            cityDayBackgroundSky2 = game.add.sprite(cityDayBackgroundSky2Xpos, cityDayBackgroundSky2Ypos, 'cityDayBackgroundSky');
            cityDayBackgroundBuildings1 = game.add.sprite(cityDayBackgroundBuildings1Xpos, cityDayBackgroundBuildings1Ypos, 'cityDayBackgroundBuildings');
            cityDayBackgroundBuildings2 = game.add.sprite(cityDayBackgroundBuildings2Xpos, cityDayBackgroundBuildings2Ypos, 'cityDayBackgroundBuildings');
            cityDayBackgroundRoad1 = game.add.sprite(cityDayBackgroundRoad1Xpos, cityDayBackgroundRoad1Ypos, 'cityDayBackgroundRoad');
            cityDayBackgroundRoad2 = game.add.sprite(cityDayBackgroundRoad2Xpos, cityDayBackgroundRoad2Ypos, 'cityDayBackgroundRoad');
        }
        else {
            if (IsParallax == true) {
                cityNightBackgroundSky1Xpos = cityNightBackgroundSky1Xpos + (gameSpeed / 7);
                cityNightBackgroundSky2Xpos = cityNightBackgroundSky2Xpos + (gameSpeed / 7);
                cityNightBackgroundBuildings1Xpos = cityNightBackgroundBuildings1Xpos + (gameSpeed / 2);
                cityNightBackgroundBuildings2Xpos = cityNightBackgroundBuildings2Xpos + (gameSpeed / 2);
                cityNightBackgroundRoad1Xpos = cityNightBackgroundRoad1Xpos + (gameSpeed / 1.2);
                cityNightBackgroundRoad2Xpos = cityNightBackgroundRoad2Xpos + (gameSpeed / 1.2);
            }
            else {
                cityNightBackgroundSky1Xpos = cityNightBackgroundSky1Xpos + (gameSpeed / 3);
                cityNightBackgroundSky2Xpos = cityNightBackgroundSky2Xpos + (gameSpeed / 3);
                cityNightBackgroundBuildings1Xpos = cityNightBackgroundBuildings1Xpos + (gameSpeed / 3);
                cityNightBackgroundBuildings2Xpos = cityNightBackgroundBuildings2Xpos + (gameSpeed / 3);
                cityNightBackgroundRoad1Xpos = cityNightBackgroundRoad1Xpos + (gameSpeed / 3);
                cityNightBackgroundRoad2Xpos = cityNightBackgroundRoad2Xpos + (gameSpeed / 3);
            }
            
            cityNightBackgroundSky1.destroy();
            cityNightBackgroundSky2.destroy();
            cityNightBackgroundBuildings1.destroy();
            cityNightBackgroundBuildings2.destroy();
            cityNightBackgroundRoad1.destroy();
            cityNightBackgroundRoad2.destroy();
            
            cityNightBackgroundSky1 = game.add.sprite(cityNightBackgroundSky1Xpos, cityNightBackgroundSky1Ypos, 'cityNightBackgroundSky');
            cityNightBackgroundSky2 = game.add.sprite(cityNightBackgroundSky2Xpos, cityNightBackgroundSky2Ypos, 'cityNightBackgroundSky');
            cityNightBackgroundBuildings1 = game.add.sprite(cityNightBackgroundBuildings1Xpos, cityNightBackgroundBuildings1Ypos, 'cityNightBackgroundBuildings');
            cityNightBackgroundBuildings2 = game.add.sprite(cityNightBackgroundBuildings2Xpos, cityNightBackgroundBuildings2Ypos, 'cityNightBackgroundBuildings');
            cityNightBackgroundRoad1 = game.add.sprite(cityNightBackgroundRoad1Xpos, cityNightBackgroundRoad1Ypos, 'cityNightBackgroundRoad');
            cityNightBackgroundRoad2 = game.add.sprite(cityNightBackgroundRoad2Xpos, cityNightBackgroundRoad2Ypos, 'cityNightBackgroundRoad');
        }
    }
    
    function scoreUpdate() {
        if (Language == "English") {
            scoreText.text = "Score: " + score;
        }
        else if (Language == "French") {
            scoreText.text = "Marquer des points: " + score;
        }
        else {
            scoreText.text = "Punktestand: " + score;
        }
    }

    function prepareToJump() {
        if (player.body.velocity.y == 0 || jumps < ExtraJumps) {
            strengthBar = game.add.sprite(player.x, player.y - 50, "StrengthBar");
            strengthBar.width = 0;
            //Add the PowerTween Animation
            PowerTween = game.add.tween(strengthBar).to({
                //Max width is 100
                width: 100
            }, 1000, "Linear", true);

            jumps++;
            
            //Keep calling prepareToJump whilst Mouse1 is down
            game.input.onDown.remove(prepareToJump, this);
            //Call jump when Mouse1 is changed to Up
            game.input.onUp.add(jump, this);
        }
    }

    function jump() {
        PlayerStrength = -strengthBar.width * 3 - 100
        strengthBar.destroy();
        
        //remove all strength bar animation
        game.tweens.removeAll();
        player.body.velocity.y = PlayerStrength * 2;
        IsJumping = true;
        PowerTween.stop();
        //Keep calling jump whilst Mouse1 is down
        game.input.onUp.remove(jump, this);

        if (jumps < ExtraJumps) {
            ////Keep calling prepareToJump whilst Mouse1 is down
            game.input.onDown.add(prepareToJump, this);
        }
    }

    function AddPlatforms() {
        var maxPlatformX = 0;
        Platforms.forEach(function (item) {
            maxPlatformX = Math.max(item.x, maxPlatformX)
        });
        var nextPlatformPosition = maxPlatformX + game.rnd.between(minimumPlatformGap, maximumPlatformGap);
        addPlatform(nextPlatformPosition);
    }

    function addPlatform(platformX) {
        if (platformX < game.width * 2) {
            NumberOfPlatforms++;
            var platform = new Platform(game, platformX, game.rnd.between(250, 380));
            game.add.existing(platform);
            platform.anchor.set(0.5, 0);
            Platforms.add(platform);
            var nextPlatformPosition = platformX + game.rnd.between(minimumPlatformGap, maximumPlatformGap);
            addPlatform(nextPlatformPosition);
        }
    }

    function Kill() {
        //Set the the value of which ever is highest between score and bestScore to the file TopScoreFile
        localStorage.setItem("TopScoreFile", Math.max(score, bestScore));
        game.state.start("Game Over");
    }

    function PlayFunction() {
        game.state.start("Play");
    }
    
    function OptionsFunction() {
        game.state.start("Options");
    }

    function DigitalBullStudiosFunction() {
        window.location.href = 'https://www.digitalbullstudios.com/';
    }

    function SoundFunction() {
        if (HasSound == true) {
            HasSound = false;
            localStorage.setItem("SoundFile", HasSound);
        }
        else {
            HasSound = true;
            localStorage.setItem("SoundFile", HasSound);
        }
    }

    function ParallaxFunction() {
        if (IsParallax == true) {
            IsParallax = false;
            localStorage.setItem("ParallaxFile", IsParallax);
        }
        else {
            IsParallax = true;
            localStorage.setItem("ParallaxFile", IsParallax);
        }
    }

    function LanguageFunction() {
        if (Language == "English") {
            Language = "French";
            localStorage.setItem("LanguageFile", Language);
        }
        else if (Language == "French") {
            Language = "German";
            localStorage.setItem("LanguageFile", Language);
        }
        else {
            Language = "English";
            localStorage.setItem("LanguageFile", Language);
        }
    }

    function BackFunction() {
        game.state.start("Menu");
    }

    //This is purely for buttons who have nothing to call, but still require a calling function
    function IGNORE() {
        //Do not delete.
    }

    function HomeFunction(homeButton, pointer) {
        game.state.start("Menu");
    }

    function RestartFunction() {
        game.state.start("Play");
    }

    function LandCheck(player, platformm) {
        game.input.onDown.remove(prepareToJump, this);

        //If the bottom of the player sprite is touching something
        if (player.body.touching.down) {
            var border = player.x - platformm.x
            
            if (Math.abs(border) > 25) {
                player.body.velocity.x = border * 2;
                player.body.velocity.y = -200;
            }
            else {
                jumps = 0;
                //If Mouse1 is down, call prepareToJump
                game.input.onDown.add(prepareToJump, this);
            }
            
            //Create a new variable called platformDiff and set it to 
            //current platformNumber - last Platform landed on by player
            var platformDiff = platformm.platformNumber - player.lastPlatform;

            if (platformDiff > 0) {
                score += platformDiff;
                scoreUpdate();
                player.lastPlatform = platformm.platformNumber;
                //player.x = 80;
            }
            
            if (IsJumping){
                IsJumping = false;
            }
        }
        else {
            IsFalling = true;
            Platforms.forEach(function (item) {
                item.body.velocity.x = 0;
            });
        }
    }

    function ResetScoreFunction() {
        game.state.start("AYS");
    }

    function YesFunction() {
        localStorage.setItem("TopScoreFile", 0);
        game.state.start("Options");
    }

    function NoFunction() {
        game.state.start("Options");
    }

    Platform = function (game, x, y) {
        if (LevelType == "Hilly") {
            Phaser.Sprite.call(this, game, x, y, "hillyPlatform");
        }
        else if (LevelType == "City Day") {
            if (y > 300) {
                Phaser.Sprite.call(this, game, x, y, "cityDayPlatformSmall");
            }
            else {
                Phaser.Sprite.call(this, game, x, y, "cityDayPlatformMedium");
            }
        }
        else{
            Phaser.Sprite.call(this, game, x, y, "cityNightPlatformMedium");
        }
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.immovable = true;
        this.platformNumber = NumberOfPlatforms;
    };

    Platform.prototype = Object.create(Phaser.Sprite.prototype);
    Platform.prototype.constructor = Platform;
    Platform.prototype.update = function () {
        if (IsJumping && !IsFalling) {
            this.body.velocity.x = PlayerStrength;
        }
        else {
            this.body.velocity.x = 0;
        }

        if (this.x < -this.width) {
            this.destroy();
            AddPlatforms();
        }
    }
}
