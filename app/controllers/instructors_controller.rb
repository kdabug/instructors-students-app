class InstructorsController < ApplicationController
    def index
      @instructors = Instructor.all
      render json: { message: "ok", instructors: @instructors }
    end
  
    def show
      begin
          # try to do this thing
        @instructor = Instructor.find(params[:id])
        render json: { message: "ok", instructor: @instructor }
      rescue ActiveRecord::RecordNotFound
        # catch other errors. doing this actually isn't
        # super recommended -- it's better to see exactly what
        # errors you might get and handle them specifically.
        render json: { message: 'no instructor matches that ID' }, status: 404
      rescue StandardError => e
        render json: { message: e.to_s }, status: 500
      #ensure
        # anything after ensure will always be done, no matter how
        # many errors happen.
      end
    end
  
  end