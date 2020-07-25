// eslint-disable-next-line no-unused-vars
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createUserTable1595677558028 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
          default: 'AUTO_INCREMENT'
        },
        {
          name: 'username',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'createdAt',
          type: 'varchar',
          default: 'CURRENT_TIMESTAMP'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
