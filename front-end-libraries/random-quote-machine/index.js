
const styles = {
    wrapper: {
        width: '45%',
        margin: '45px auto 0 auto',
        backgroundColor: '#272727',
        borderRadius: 12,
        padding: 12,
        boxShadow: '0px 7px 15px 0px rgba(0,0,0,0.5)',
    },
    quoteText: {
        fontSize: 36,
        fontStyle: 'italic',
        marginBottom: 12,
        color: 'white'
    },
    quoteAuthor: {
        fontSize: 18,
        color: '#444444',
        textAlign: 'right',
        marginBottom: 12,
        color: '#f0f0f0',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    newQuoteButton: {
        backgroundColor: '#d2d8b3',
        padding: 6,
        borderRadius: 8,
        cursor: 'pointer',
        marginLeft: 6,
    },
    tweetButton: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    }
};

const API = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';

const fetchQuote = (quoteSetter) => {
  return fetch(API)
    .then(r => r.json())
    .then(r => {
        quoteSetter({
            'text': r.quotes[0].text, 
            'author': r.quotes[0].author 
        });
    });
}

const App = () => {
    const [quote, setQuote] = React.useState({
        'text': 'quote text',
        'author': 'quote author',
    });

    React.useEffect(() => {
        fetchQuote(setQuote);
    }, []);

    return (
        <div id="quote-box" style={styles.wrapper}>
            <div id="text" style={styles.quoteText}>{quote.text}</div>
            <div id="author" style={styles.quoteAuthor}>- {quote.author}</div>
            <div style={styles.buttonWrapper}>
                <button 
                    style={styles.newQuoteButton} 
                    id="new-quote" 
                    onClick={() => fetchQuote(setQuote)}>
                    Next quote
                </button>
                <a 
                    style={styles.tweetButton} 
                    id="tweet-quote" 
                    href='https://twitter.com/intent/tweet'>
                    Tweet quote
                </a>
            </div>
        </div>
    );
  }
  
  
  ReactDOM.render(<App />, document.getElementById("app"))