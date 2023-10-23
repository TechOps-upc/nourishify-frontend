// food-plan-entity.js

export class FoodPlanEntity {
    static getBreakfastsForId(foodPlansData, id) {
        const plan = foodPlansData.find(plan => plan.id === id);
        if (!plan) return null;
        return {
            monday: plan.monday.breakfast,
            friday: plan.friday.breakfast
        };
    }
}
