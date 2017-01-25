class Api::ExpensesController < ApplicationController
  def index
    if current_user.admin
      @expenses = Expense.all.order(created_at: :desc)
    elsif current_user
      @expenses = current_user.expenses.order(created_at: :desc)
    else
      render json: {}
    end
  end

  def create
    @expense = Expense.new(expense_params)
    @expense.user_id = current_user.id
    if @expense.save
      render 'api/expenses/show'
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def update
    @expense = Expense.find_by_id(expense_params[:id])
    if @expense.update(expense_params)
      render 'api/expenses/show'
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def destroy
    @expense = Expense.find_by_id(params[:id])
    @expense.destroy
    render json: {}
  end

  private

  def expense_params
    params.require(:expense).permit(:id, :amount, :description, :created_at)
  end
end
