export interface ISchedule {
    id: number,
    period: number,
    days_of_week: string[],
    name: string,
    duration: number,
    tags: string[]
} 

const filterInstructional = (item: ISchedule) => {
    return item.tags.includes('instructional');
}

export const getInstructionalTime = (schedule: ISchedule[]) =>{
	const allTime = schedule.map((item:ISchedule) => {return item.duration}).reduce((a:number, b: number) => a + b, 0);
    const time = schedule.filter(filterInstructional).map((item:ISchedule) => {return item.duration}).reduce((a:number, b: number) => a + b, 0);
    return (time * 100) / allTime;
}