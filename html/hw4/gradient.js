const h = 0.01;

// �ڭ̷Q���� f ���̧C�I
function f(p) {
    const [x, y] = p;
    return x * x + y * y;
}

// df(f, p, k) ����� f ���ܼ� k �����L��: df / dp[k]
// �Ҧp�b�W�z f �d�Ҥ� k=0, df/dx, k=1, df/dy
function df(f, p, k) {
    const p1 = p.slice(); // �ƻs�}�C�H�קK���ܭ�l�}�C
    p1[k] += h;
    return (f(p1) - f(p)) / h;
}

// ��� f �b�I p �W�����
function grad(f, p) {
    const gp = p.slice(); // �ƻs�}�C�H�קK���ܭ�l�}�C
    for (let k = 0; k < p.length; k++) {
        gp[k] = df(f, p, k);
    }
    return gp;
}

const [x, y] = [1, 3];
console.log('x=', x, 'y=', y);
console.log('df(f(x,y), 0) = ', df(f, [x, y], 0));
console.log('df(f(x,y), 1) = ', df(f, [x, y], 1));
console.log('grad(f)=', grad(f, [x, y]));