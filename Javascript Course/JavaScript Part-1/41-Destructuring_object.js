// Object Destructuring

const band ={
     bandName : "band baja braat",
     famousSong : "Tu tu tututuututututu",
     year : 1920,
     anothername : 'bandwaaa'
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;


const {bandName, famousSong, ...restprops} = band;
console.log(bandName, famousSong, restprops)
