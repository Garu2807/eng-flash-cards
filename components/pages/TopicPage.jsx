const React = require('react')

function TopicPage({ topics }) {
    return (
        <Layout title="eng-flash-cards">
            <div className="container">
                <h2> Выбери тему</h2>
                <div>
                    <div id="topic-container">
                        {topics.map((topic) => (
                            <div>
                                <a href={`/topic/${topic.id}`}>
                                    <h2>{topic.topic}</h2>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Layout>
    );
}

module.exports = TopicPage;
