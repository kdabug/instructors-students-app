class CreateInstructors < ActiveRecord::Migration[5.2]
  def change
    create_table :instructors do |t|
      t.string :name
      t.string :description
      t.string :link
      t.string :photo

      t.timestamps
    end
  end
end
