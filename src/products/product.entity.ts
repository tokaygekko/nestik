import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column()
  public title: string

  @Column({ nullable: true })
  public price: number
}

export default Product
