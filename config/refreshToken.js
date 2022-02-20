class RefreshTokens {
    refreshTokens = {}

    addToken(token, userId) {
        this.refreshTokens[token] = userId

    }
    getRefreshToken() {
        return this.refreshTokens
    }
}




const refreshTokens = new RefreshTokens()
module.exports = refreshTokens