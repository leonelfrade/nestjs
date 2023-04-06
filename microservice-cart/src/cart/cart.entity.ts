import { BaseEntity,Entity, Column, PrimaryGeneratedColumn, OneToMany,ManyToOne } from 'typeorm';

@Entity('cart')
export class CartEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number 

    @Column('int')
    shoppingCartId: number 

    @Column('int')
    userId: number 

    @Column('int')
    productId: number 

    @Column('float')
    price: number 

    @Column('int')
    quantity: number 
}
