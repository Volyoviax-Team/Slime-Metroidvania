pause_menu = function(sketch) {
    sketch.setup = function() {
        let pm_screen = this.createCanvas(800,450);
        pm_screen.position(0,0);
    }

    sketch.draw = function() {
        this.background("black");
    }
}

function pmSetup() {
    new p5(main_menu);
}

function pmDraw() {

}
