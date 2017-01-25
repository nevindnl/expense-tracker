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

  def search
    t1, t2 = params[:t1], params[:t2]
    if t1 == '' && t2 == ''
      @expenses = current_user.expenses
    elsif t1 == ''
      @expenses = current_user.expenses.where('created_at < ?', t2)
    elsif t2 == ''
      @expenses = current_user.expenses.where('created_at > ?', t1)
    else
      @expenses = current_user.expenses.where('created_at BETWEEN ? AND ?', t1, t2)
    end
    @expenses = @expenses.order(created_at: :desc)
    render 'api/expenses/index'
  end

  private

  def expense_params
    params.require(:expense).permit(:id, :amount, :description, :created_at)
  end
end
