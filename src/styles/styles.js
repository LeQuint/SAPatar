import Background from '../img/backgrounds/fantasy.jpg';

const styles = {
    outlined: {
        outline: '2px dotted red',
    },

    centeredText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal',
    },

    verticalCenteredContentsLeft: {
        height: '100%',
        display: 'flex',

        float: 'left',
        textAlign: 'left',

        // To float an element inside, assign it the following:
        // display: 'block',
        // marginTop: 'auto',
        // marginBottom: 'auto',
    },

    verticalCenteredContentsRight: {
        height: '100%',
        display: 'flex',

        float: 'right',
        textAlign: 'right',

        // To float an element inside, assign it the following:
        // display: 'block',
        // marginTop: 'auto',
        // marginBottom: 'auto',
    },

    root: {
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100%',
        margin: '0',
        padding: '0',

        fontFamily: 'Bungee',
    },

    floatingContainer: {
        padding: '40px',
        height: '100%',
    },

    sidebar: {
        container: {
            // Size and position
            float: 'left',
            height: '100%',
            width: '450px',
            position: 'relative',

            // Card
            backgroundColor: '#F0F4F9',
            borderRadius: '25px',

            // Content
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },

        title: {
            width: '100%',
            marginTop: '34px',
            marginBottom: '22px',

            fontSize: '2.4em',
            fontWeight: 'bold',
            color: '#334E69',
        },

        button: {
            width: '82%',
            marginBottom: '20px',
        },

        toggleNationalGlobal: {
            width: '100%',
        },

        // Match the two below, except for background color
        personCard: {
            height: '83px',

            margin: '12px 20px',
            borderRadius: '10px',

            backgroundColor: '#E8ECF0',
        },

        personCardNumber: {
            // Size
            height: '100%',
            lineHeight: '100%',
            width: '75px',  // Proportional to personCard height

            backgroundColor: '#AAC6DE',
            borderRadius: '10px',

            display: 'flex',
            alignItems: 'center',

            float: 'left',

            // Font styling
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',

            fontSize: '32px',
            fontWeight: 'bold',
            color: '#427CAC',
        },

        personCardPicMargins: {
            display: 'block',
            marginTop: 'auto',
            marginBottom: 'auto',
        },

        personCardNameAndPointsContainer: {
            // Float
            display: 'block',
            marginTop: 'auto',
            marginBottom: 'auto',
        },

        personCardName: {
            // Position
            float: 'left',
            marginRight: '15px',

            // Content
            fontSize: '24px',
            color: '#427CAC',
            lineHeight: '130%',
            textTransform: 'uppercase',
        },

        personCardPoints: {
            // Content
            fontSize: '16px',
            color: '#E09D03',
            lineHeight: '100%',
            textTransform: 'uppercase',
        },

        personCardFlag: {
            // Size
            width: '45px',
            height: '45px',

            // Position
            alignSelf: 'center',
            marginRight: '15px',

            // Float
            display: 'block',
            marginTop: 'auto',
            marginBottom: 'auto',
        },

        whiteGradient: {
            width: '100%',
            position: 'absolute',  // Parent is relative, to position this over
            bottom: '0',
            left: '0',
            zIndex: '1',
        },

        highlightCard: {
            width: '100%',
            position: 'absolute',  // Parent is relative, to position this over
            bottom: '0',
            left: '0',
            zIndex: '2',

            marginBottom: '15px',
        },
    },

    notSidebarContainer: {
        float: 'right',
        height: '100%',
        width: '65%',  // Needs to be adjusted if other measurements change
        // outline: '1px dotted grey',

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    medals: {
        display: 'inline-block',
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        float: 'center',
    },

    welcomeMessage: {
        // Size and positioning
        width: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        margin: '30px 0',

        // Contents
        textAlign: 'center',
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#E8ECF0',
    },

    // To customize the avatar size, go to Person.js
    avatarContainer: {
        // Positioning
        display: 'flex',
        margin: '30px 0',

        // Contents
        alignItems: 'center',
        justifyContent: 'center',
        // outline: '1px dotted grey',
    },

    buttonContainer: {
        // Contents
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '60px 0',
    },

    orangeButtonLarge: {
        // Size/shape
        width: '350px',
        height: '100px',
        borderRadius: '28px',

        marginLeft: '15px',
        marginRight: '15px',

        // Color
        background: 'linear-gradient(175.18deg, #FABC63 23.99%, #BE8502 87.39%)',
        border: 0,

        // Content
        fontSize: '26px',
    },



    modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

export default styles