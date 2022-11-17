import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import Header from '../components/Header/Header';
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu';

export default function App({ Component, pageProps }: AppProps) {
    

    return(
        <RecoilRoot>
            <Header></Header>

            <HamburgerMenu></HamburgerMenu>

            <main>
                <Component {...pageProps} />
            </main>
            
            <footer>
            </footer>
        </RecoilRoot>

    );
}
