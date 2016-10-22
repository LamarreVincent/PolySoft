// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        var config = {
            apiKey: "AIzaSyBaDDPA4Qs0kkod-3yinowsZz6YQ7h5Akg",
            authDomain: "vbcard-a78ab.firebaseapp.com",
            databaseURL: "https://vbcard-a78ab.firebaseio.com",
            storageBucket: "vbcard-a78ab.appspot.com",
            messagingSenderId: "868537869129"
        };
        firebase.initializeApp(config);

        var database = firebase.database();


    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();