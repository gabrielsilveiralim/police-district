
export function analyzePriority(
    type: string,
    description: string,
    hour: string
) {
    let score = 0;
    const text = description.toLowerCase();

    if (type === 'Furto') score += 2;
    if (type === 'Roubo') score += 4;
    if (type === 'Violência') score += 6;
    if (type === 'Arma de fogo') score += 8;

    if (text.includes('arma')) score += 5;
    if (text.includes('tiro')) score += 6;
    if (text.includes('morte')) score += 10;
    if (text.includes('agressão')) score += 5;
    if (text.includes('ameaça')) score += 4;

    const hourNumber = Number(hour.split(':')[0]);

    if (hourNumber >= 0 && hourNumber <= 5) {
        score += 3;
    }

    if (score >= 12) {
        return 'ALTA';
    }
    if (score >= 6) {
        return 'MÉDIA';
    }
    return 'BAIXA';
}