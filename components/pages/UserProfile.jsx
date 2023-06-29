const React = require('react');
const Layout = require('./Layout')

function UserProfile(user) {
    return (
        <Layout user={user} title="Flashcards">
            <div>
                <h2>{user.login}</h2>
            </div>
            <div>
                <h4>Это я умею</h4>
                <p>пройденные темы</p>
                <p>пройденные карточки</p>
            </div>
        </Layout>
    )
}


module.exports = UserProfile;