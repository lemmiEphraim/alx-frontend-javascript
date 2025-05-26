// Interfaces
interface MajorCredits {
    credits: number;
    _majorBrand: 'major'; // Brand property
}

interface MinorCredits {
    credits: number;
    _minorBrand: 'minor'; // Brand property
}

// Functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: 'major'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: 'minor'
    };
}

// Example usage
const major1: MajorCredits = { credits: 3, _majorBrand: 'major' };
const major2: MajorCredits = { credits: 4, _majorBrand: 'major' };
console.log(sumMajorCredits(major1, major2));

const minor1: MinorCredits = { credits: 1, _minorBrand: 'minor' };
const minor2: MinorCredits = { credits: 2, _minorBrand: 'minor' };
console.log(sumMinorCredits(minor1, minor2));
