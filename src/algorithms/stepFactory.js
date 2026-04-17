function createStep(type, indices, extra = {}) {
    return {
        type,
        indices,
        ...extra
    };
}

export function createCompareStep(indices, explanation, extra = {}) {
    return createStep('compare', indices, { explanation, ...extra });
}

export function createSwapStep(indices, explanation, extra = {}) {
    return createStep('swap', indices, { explanation, ...extra });
}

export function createOverwriteStep(index, value, explanation, extra = {}) {
    return createStep('overwrite', [index], {
        value,
        explanation,
        ...extra
    });
}
