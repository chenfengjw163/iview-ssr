export default {
    name: 'user',
    props: ['userName'],
    render () {
        return (
            <div>
                用户名：<span>{this.userName}</span>
            </div>
        )
    }
}
