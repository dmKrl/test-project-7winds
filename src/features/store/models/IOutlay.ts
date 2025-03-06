export interface IOutlay {
    child: null[],
    equipmentCosts: number,
    estimatedProfit: number,
    id: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    rowName: string,
    salary: number,
    supportCosts: number,
    total: number,
}

export interface IOutlayForCreate {
    equipmentCosts: number | 0,
    estimatedProfit: number | 0,
    machineOperatorSalary: number | 0,
    mainCosts: number | 0,
    materials: number | 0,
    mimExploitation: number | 0,
    overheads: number | 0,
    parentId: number | null,
    rowName: string,
    salary: number | 0,
    supportCosts: number | 0
}
