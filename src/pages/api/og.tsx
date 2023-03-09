import { ImageResponse } from '@vercel/og';import { Anek_Telugu } from '@next/font/google';

export const config = {
    runtime: 'edge'
};

export default function () {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 80,
                    fontFamily: 'Anek Telugu',
                    fontWeight: 'bolder',
                    background: 'darkblue',
                    color: 'yellowgreen',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingInline: '20px'
                }}
            >
                <div>Henrique Magno</div>
                <div style={{fontSize: 50, marginTop: '10px', }} >Web Portfólio </div>
            </div>
        ),
        {
            width: 1200,
            height: 600
        }
    );
}
