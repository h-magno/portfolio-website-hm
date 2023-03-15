import React from 'react';const homeStyle = {
    headlineHM: {
        fontFamily: 'Anek Telugu'
    }
};

import './HomeTitle.css'

const HomeTitle = () => {
    return (
        <React.Fragment>
            <div className="sm:hidden md:static">
                <div className={`-mb-9 flex flex-col`}>
                    <div className="relative flex h-10 flex-col overflow-y-hidden">
                        <span
                            className={`textoCapa shuffleText h-full font-extralight`}
                        >
                            <span className="text-green-500">Olá,</span>{' '}
                            bem-vindo ao meu web
                        </span>
                        <ScrambleTextLine1 />
                    </div>
                    <div className="relative flex h-28 flex-col overflow-y-hidden ">
                        <ScrambleTextLine2 />
                    </div>
                </div>
                <div className="relative mt-10 flex h-8 flex-col overflow-y-hidden">
                    <div className={` shuffleText2 h-full w-full`}>
                        <span className="textoCapa2">Criado por:</span>
                        <span
                            className="textoCapa2 ml-3 font-extrabold tracking-wide"
                            style={homeStyle.headlineHM}
                        >
                            HENRIQUE MAGNO
                        </span>
                    </div>
                    <ScrambleTextLine3 />
                </div>
            </div>
            <div className="sm:static md:hidden">
                <div className={`-mb-9 flex flex-col`}>
                    <span className={`textoCapa font-extralight`}>
                        <span className="text-lime-400">Olá,</span> bem-vindo ao
                        meu web
                    </span>
                    <span className={`tituloCapa font-extrabold`}>
                        PORTFÓLIO
                    </span>
                </div>
                <div className={`w-full sm:mt-10 md:mt-10 lg:mt-5`}>
                    <span className="textoCapa2">Criado por:</span>
                    <span
                        className="textoCapa2 ml-3 font-extrabold tracking-wide"
                        style={homeStyle.headlineHM}
                    >
                        HENRIQUE MAGNO
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomeTitle;

function ScrambleTextLine1({}) {
    return (
        <>
            {' '}
            <span className={`textoCapa shuffleText h-full font-extralight`}>
                <span className="text-green-500">lO',</span> bEm-v!ndX Oa meu 3eb
            </span>
            <span className={`textoCapa shuffleText h-full font-extralight`}>
                <span className="text-green-500">!lá,</span> Xe$-v!nd% Oa mOu 3eb
            </span>
            <span className={`textoCapa shuffleText h-full font-extralight`}>
                <span className="text-green-500">oXá,</span> B3$-v!nd0 a* Meeu
                Web
            </span>
            <span className={`textoCapa shuffleText h-full font-extralight`}>
                <span className="text-green-500">#l¬,</span> b¬-v&ndo ao *u w%b
            </span>
            <span className={`textoCapa shuffleText h-full font-extralight`}>
                <span className="text-green-500">Ç7á,</span> b%m-vYdo ¨#3 ¨e% WEb
            </span>
            <span className={`textoCapa shuffleText h-full font-extralight`}>
                <span className="text-green-500">&@á,</span> B3m-v!n*0 To mxu web
            </span>
        </>
    );
}

function ScrambleTextLine2({}) {
    return (
        <>
            {' '}
            <span className={`tituloCapa shuffleTitle h-full font-extrabold`}>
                PORTFÓLIO
            </span>
            <span className={`tituloCapa shuffleTitle h-full font-extrabold`}>
                *¬R*f#LIO
            </span>
            <span className={`tituloCapa shuffleTitle h-full font-extrabold `}>
                Po%TFÓLI#
            </span>
            <span className={`tituloCapa shuffleTitle h-full font-extrabold `}>
                !@R¨FóL{`}`}O
            </span>
            <span className={`tituloCapa shuffleTitle h-full font-extrabold `}>
                {')'}O%7F0LIo
            </span>
            <span
                className={`tituloCapa shuffleTitle flex h-full  items-center font-extrabold `}
            >
                P@RT_ÓLI#
            </span>
            <span
                className={`tituloCapa shuffleTitle flex h-full  items-center font-extrabold `}
            >
                %O¢TF0L!#
            </span>
        </>
    );
}

function ScrambleTextLine3({}) {
    return (
        <>
            {' '}
            <div className={` shuffleText2 h-full w-full`}>
                <span className="textoCapa2">cr!@dO x0r:</span>
                <span
                    className="textoCapa2 ml-3 font-extrabold tracking-wide"
                    style={homeStyle.headlineHM}
                >
                    hEF+IqU# m@$N0
                </span>
            </div>
            <div className={` shuffleText2 h-full w-full`}>
                <span className="textoCapa2">cR!@dO =oR:</span>
                <span
                    className="textoCapa2 ml-3 font-extrabold tracking-wide"
                    style={homeStyle.headlineHM}
                >
                    h#nRiQu3 %aG+O
                </span>
            </div>
            <div className={` shuffleText2 h-full w-full`}>
                <span className="textoCapa2">'Ri@d0 PoR:</span>
                <span
                    className="textoCapa2 ml-3 font-extrabold tracking-wide"
                    style={homeStyle.headlineHM}
                >
                    H#$r!qUe ¬A¨No
                </span>
            </div>
            <div className={` shuffleText2 h-full w-full`}>
                <span className="textoCapa2">cri4%0 p0r:</span>
                <span
                    className="textoCapa2 ml-3 font-extrabold tracking-wide"
                    style={homeStyle.headlineHM}
                >
                    h&RiQ'u'3 Ma*&³1
                </span>
            </div>
            <div className={` shuffleText2 h-full w-full`}>
                <span className="textoCapa2">$R!Ad0 7oR::</span>
                <span
                    className="textoCapa2 ml-3 font-extrabold tracking-wide"
                    style={homeStyle.headlineHM}
                >
                    @E*iQuE #aG-4¬
                </span>
            </div>
            <div className={` shuffleText2 h-full w-full`}>
                <span className="textoCapa2">#TI+D0 _ Or:</span>
                <span
                    className="textoCapa2 ml-3 font-extrabold tracking-wide"
                    style={homeStyle.headlineHM}
                >
                    %En+-iQu3 @aG$O
                </span>
            </div>
        </>
    );
}
