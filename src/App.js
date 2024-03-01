import React from 'react';
import Header from '../src/components/Header';
import CounterComponent from '../src/components/CounterComponent';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <body>
      <header>
        <Header />
      </header>

      <main>
        <Main />

        <div>
          <CounterComponent />
        </div>
      </main>

      <Footer />
    </body>
  );
};

export default App;