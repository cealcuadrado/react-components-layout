import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Header</p>
            </header>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <main>
                <p>Main</p>
            </main>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Footer</p>
            </footer>
        );
    }
}

export default Layout;