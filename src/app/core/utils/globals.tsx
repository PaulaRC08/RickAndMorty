export const getStatusIcon = (status: string) => {
    switch (status) {
        case 'Alive':
            return <i className="bi bi-heart-fill me-1 text-info"></i>;
        case 'Dead':
            return <i className="bi bi-x-octagon-fill me-1 text-danger"></i>;
        case 'unknown':
            return <i className="bi bi-question-circle-fill me-1 text-warning"></i>
        default:
            return <i className="bi bi-question-circle-fill me-1 text-warning"></i>
    }
};

export const getGenderIcon = (gender: string) => {
    switch (gender) {
        case 'Female':
            return <i className="bi bi-gender-female me-1"></i>
        case 'Male':
            return <i className="bi bi-gender-male me-1"></i>;
        case 'Genderless':
            return <i className="bi bi-gender-neuter me-1"></i>;
        case 'unknown':
            return <i className="bi bi-gender-ambiguous me-1"></i>
        default:
            return <i className="bi bi-gender-ambiguous me-1"></i>
    }
};