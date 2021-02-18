export function detect(): string {
    return 'web';
}

export function env() {
    let env = localStorage.getItem('env')
    if (env) return env;

    env = detect();

    localStorage.setItem('env', env);

    return env;
}

