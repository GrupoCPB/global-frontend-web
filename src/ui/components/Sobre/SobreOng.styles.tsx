export const sobreOngStyle = styled('div')`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Merriweather', serif;
    }

    body{
        padding: 100px;
        background: rgb(17, 112, 158);
        color: #F7F7F7;
        display: flex;
    }

    .container{
        display: flex;
    }

    .content{
        width: 50%;
    }

    h2{
        font-weight: 300;
        font-size: 46px;
        line-height: 2em;
    }

    h3{
        font-weight: 300;
        font-size: 20px;
        line-height: 2em;
        margin-top: 30px;
    }

    p{
        font-weight: 300;
        font-size: 16px;
        line-height: 1.6em;
        text-align: left;
    }
    #segundoP{
        margin-bottom: 40px;
    }

    .saibaMais{
        text-align: right;
    }
    a{
        font-weight: 300;
        font-size: 14px;
        color: #F7F7F7;
        margin-bottom: 40px;
    }

    button{
        height: 41px;
        width: calc(50% - 25px);
        max-width: 222px;
        color: #F7F7F7;
        background: rgb(122, 14, 72);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        border-radius: 7px;
        border: none;
    }
    button:last-child{
        margin-left: 15px;
    }

    .imgContent{
        margin-top: auto;
        margin-bottom: auto;
    }
    .imgContent img{
        width: 488px;
        height: 327px;
    }
`